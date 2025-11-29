import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiting (for production, use a proper service like Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function getClientIp(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip') || 'unknown'
}

function checkRateLimit(ip: string, maxRequests: number = 5, windowMs: number = 3600000): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count < maxRequests) {
    record.count++
    return true
  }

  return false
}

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request)

    // Rate limiting
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { status: 'error', message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { status: 'error', message: 'Please enter your full name' },
        { status: 400 }
      )
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { status: 'error', message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    if (!message || message.trim().length < 10 || message.length > 2000) {
      return NextResponse.json(
        { status: 'error', message: 'Message must be between 10 and 2000 characters' },
        { status: 400 }
      )
    }

    // For now, just log the submission
    // TODO: Integrate with SendGrid, Nodemailer, or other email service
    console.log('Contact form submission:', { name, email, message })

    return NextResponse.json(
      { status: 'ok', message: 'Thank you for reaching out! We will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { status: 'error', message: 'Server error. Please try again later.' },
      { status: 500 }
    )
  }
}
