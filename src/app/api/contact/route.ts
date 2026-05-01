import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting (for production, use a proper service like Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

// Create transporter
const getTransporter = () => {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    throw new Error(
      "SMTP configuration is missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local"
    );
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

function checkRateLimit(
  ip: string,
  maxRequests: number = 5,
  windowMs: number = 3600000
): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count < maxRequests) {
    record.count++;
    return true;
  }

  return false;
}

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);

    // Rate limiting
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          status: "error",
          message: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { status: "error", message: "Please enter your full name" },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { status: "error", message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10 || message.length > 2000) {
      return NextResponse.json(
        {
          status: "error",
          message: "Message must be between 10 and 2000 characters",
        },
        { status: 400 }
      );
    }

    // Send email using SMTP
    try {
      const transporter = getTransporter();

      // Email to recipient
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New contact form submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      // Confirmation email to user
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: "Thank you for contacting us",
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>The Team</p>
        `,
      });

      return NextResponse.json(
        {
          status: "ok",
          message: "Thank you for reaching out! We will get back to you soon.",
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      throw emailError;
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { status: "error", message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
