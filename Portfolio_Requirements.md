# Portfolio Website Requirements Document

## Abstract

This document outlines the functional and non-functional requirements for a personal portfolio website.

**Project Goal:**  
Create a professional, responsive, and visually compelling personal portfolio website that effectively showcases key UX/User Research case studies and personal branding—ultimately leading to professional opportunities.

**Target Audience:**  
Recruiters, Hiring Managers, Design Colleagues, and Potential Collaborators.

---

# 1. Functional Requirements  
(What the site must *do*)

## 1.1 Core Navigation & Structure

| ID | Requirement | Description | Priority |
|----|-------------|-------------|----------|
| **F-1.1** | Landing Page / Hero Section | Must feature a clear, strong headline: **“An Iterative Observer: Research to Resolution”**, a professional headshot or avatar, and immediate CTA text: **“View My Work.”** | High |
| **F-1.2** | Primary Navigation | Must include links to **Work (Case Studies)**, **About/Resume**, and **Contact**. Navigation must be sticky/fixed on scroll. | High |
| **F-1.3** | Case Study Index | Must display all case studies (Headspace, Gobi, Spotify) in a highly visual **Image-First Grid** with key visual, title, project type, and 1–2 sentence summary. | High |
| **F-1.4** | Individual Case Study Pages | Each case study must have its own long-form page following the standard structure (see F-1.5). | High |
| **F-1.5** | Case Study Template | Each case study page must include: **Project Overview** (Goal, Role, Timeline, Team), **Context & Problem**, **Research & Insights**, **Ideation & Architecture**, **Design Evolution**, **Final Concept/Solution**, **Outcomes & Learnings/Reflections**. | High |
| **F-1.6** | About/Resume Page | Must include biography, skills list (UX Research, UI Design, Prototyping), plus a link or embed to a downloadable PDF resume. | Medium |
| **F-1.7** | Contact Form | Simple contact form (Name, Email, Message) with confirmation after submission. | Medium |

---

## 1.2 Case Study Content Requirements

| ID | Case Study | Content Focus |
|----|-------------|----------------|
| **F-2.1** | Headspace (Sleep Mood) | Highlight user interviews, affinity mapping/coding, and reasoning behind choosing the *Sleep Mood* concept over alternatives (Fresh Air Mode, AI). |
| **F-2.2** | Gobi (Gamified Sobriety) | Emphasize emotional design + gamification. Must show mascot evolution and achievement system (GobCoins) improvements via usability testing. |
| **F-2.3** | Spotify (UX Audit) | Highlight UX Audit insights: pain points (mono-listening, overwhelming interface) and solutions for discoverability and reducing algorithm fatigue. |

---

# 2. Non-Functional Requirements  
(How the site must *perform*)

## 2.1 Performance & Accessibility

| ID | Requirement | Description | Priority |
|----|-------------|-------------|----------|
| **N-1.1** | Responsiveness | Must adapt seamlessly across mobile, tablet, and desktop. | Critical |
| **N-1.2** | Load Speed | Target under **3 seconds** load time. Visual assets must be optimized. | High |
| **N-1.3** | Accessibility | Must meet **WCAG 2.1 AA**: high contrast, semantic HTML, alt text, keyboard navigation. | High |
| **N-1.4** | Browser Compatibility | Must work across Chrome, Firefox, Safari, Edge. | Medium |

---

## 2.2 Branding & Aesthetics

| ID | Requirement | Description |
|----|-------------|-------------|
| **N-2.1** | Visual Consistency | Maintain consistent colors, typography, spacing. |
| **N-2.2** | Professional Tone | Modern, clear, minimal design that emphasizes content. |
| **N-2.3** | Visual Assets | All screenshots, wireframes, diagrams must be clear, legible, and captioned. |
| **N-2.4** | Color Scheme | Dark & modern: near-black background, off-white text, dark green accent for interactive elements. |
| **N-2.5** | Typography | Headlines: bold **Slab Serif**. Body text: clean **Sans Serif**. |

---

## 2.3 Technology & Maintenance

| ID | Requirement | Description | Priority |
|----|-------------|-------------|----------|
| **N-3.1** | Modern Stack | Should use a modern frontend stack (HTML/CSS/JS, React, or Angular). | Medium |
| **N-3.2** | Maintainability | Code must be clean, modular, and easy to update. | Medium |

---

# 3. Success Metrics

| ID | Metric | Definition |
|----|--------|------------|
| **S-1** | Case Study Engagement | Avg. time on page > 3 minutes, includes scrolling to reflection section. |
| **S-2** | Conversion Rate | % of users who go from a case study to the Contact page or download the resume. |
| **S-3** | Mobile Performance | Site must render and navigate smoothly on mobile during testing. |

---

# 4. Technical Specifications (Engineer Implementation Guide)

## 4.1 Contact Form API

| Property | Value |
|----------|-------|
| **Endpoint** | `POST /api/contact` |
| **Submission Handler** | Email to `rtleskiw@gmail.com` |
| **Request Body** | `{ "name": "string", "email": "string (email format)", "message": "string (max 2000 chars)" }` |
| **Success Response (200)** | `{ "status": "ok", "message": "Thank you for reaching out!" }` |
| **Error Responses** | `400` (validation failed), `429` (rate limited), `500` (server error) |
| **Spam Prevention** | Implement rate limiting (e.g., 5 submissions per IP per hour) or reCAPTCHA |
| **Email Service** | Use SendGrid, Nodemailer, or similar SMTP provider |

---

## 4.2 Case Study JSON Schema

Each case study object must conform to this structure:

```json
{
  "slug": "string (URL-safe identifier, e.g., 'headspace-sleep-mood')",
  "title": "string (e.g., 'Headspace — Sleep Mood')",
  "summary": "string (1–2 sentence summary for grid card)",
  "projectType": "string (e.g., 'UX Research', 'Design', 'UX Audit')",
  "timeline": "string (e.g., 'Jan 2024 - Mar 2024')",
  "role": "string (e.g., 'Lead Researcher', 'UX Designer')",
  "team": ["string"] (array of team member names),
  "thumbnailImage": "string (path to grid card image, e.g., '/assets/headspace/thumbnail.webp')",
  "heroImage": "string (path to case study page hero image, e.g., '/assets/headspace/hero.webp')",
  "sections": [
    {
      "heading": "string (e.g., 'Context & Problem')",
      "body": "string (markdown or HTML content)"
    }
  ],
  "outcomes": {
    "metrics": "string (quantitative results, e.g., '45% improvement in user retention')",
    "learnings": "string (qualitative reflections and key takeaways)"
  }
}
```

**Required fields:** `slug`, `title`, `summary`, `projectType`, `timeline`, `role`, `team`, `thumbnailImage`, `heroImage`, `sections`, `outcomes`

---

## 4.3 Routing & URL Patterns

| Route | Purpose |
|-------|---------|
| `/` | Landing page / hero section |
| `/work` | Case study index (grid of all three case studies) |
| `/work/:slug` | Individual case study page (e.g., `/work/headspace-sleep-mood`) |
| `/about` | About/resume page |
| `/contact` | Contact page |

**URL Slug Convention:** Lowercase, hyphen-separated (e.g., `headspace-sleep-mood`, `gobi-gamified-sobriety`, `spotify-ux-audit`)

---

## 4.4 Component Breakdown

| Component | Responsibility |
|-----------|-----------------|
| **Header** | Sticky navigation bar with logo and links to /work, /about, /contact |
| **Footer** | Site footer with links and copyright |
| **Hero** | Landing page hero section with headline, CTA, and headshot |
| **CaseGrid** | Displays case study cards in responsive grid (1 col mobile, 2 tablet, 3 desktop) |
| **CaseCard** | Individual card in grid; displays thumbnail, title, project type, summary |
| **CaseDetail** | Full case study page with all sections and outcomes |
| **MarkdownRenderer** | Renders markdown/HTML content for case study sections |
| **ContactForm** | Form with Name, Email, Message fields; client-side validation; submit to `/api/contact` |
| **ImageGallery** | Displays case study supporting images (screenshots, diagrams, wireframes) |

---

## 4.5 Responsive Design Specifications

| Breakpoint | Width Range | Grid Columns | Image Behavior |
|------------|-------------|--------------|-----------------|
| **Mobile** | 320px – 767px | 1 column | Full-width with margins (16px padding) |
| **Tablet** | 768px – 1023px | 2 columns | Full-width with margins (24px padding) |
| **Desktop** | 1024px+ | 3 columns | Constrained to max-width 1200px, centered |

**Image Optimization Rules:**
- Serve WebP format first, fallback to PNG/JPEG
- Lazy-load images below the fold
- Use `srcset` for 1x/2x density variants
- Total image bytes on first load: < 500 KB
- Case study hero images: min 1200px wide, max 2000px wide

---

## 4.6 Visual Assets Inventory

| Asset Type | Status | Notes |
|-----------|--------|-------|
| **Hero Headshot** | To Create | Professional photo for landing page hero |
| **Case Study Hero Images** | Have | Headspace, Gobi, Spotify hero images |
| **Case Study Thumbnails** | To Create | Smaller versions for grid cards |
| **Case Study Screenshots/Diagrams** | Have | From slide deck (user research, design iterations, final mockups) |
| **Resume PDF** | Have | Link/embed on /about page |

---

## 4.7 Hosting & Deployment

| Property | Value |
|----------|-------|
| **Hosting Platform** | GitHub Pages |
| **CI/CD** | GitHub Actions (auto-deploy on push) |
| **Repository** | Public or private GitHub repo |
| **SSL/HTTPS** | Enabled by default via GitHub Pages |
| **Domain** | `<username>.github.io` or custom domain (optional) |
| **Build Command** | Framework-specific (e.g., `npm run build` for React/Next.js) |
| **Deployment Trigger** | Every push to `main` or `master` branch |

**Environment Variables:**
- `REACT_APP_CONTACT_EMAIL` = `rtleskiw@gmail.com`
- `REACT_APP_API_ENDPOINT` = API URL for contact form submissions

**GitHub Actions Workflow:** Set up `.github/workflows/deploy.yml` to:
1. Install dependencies
2. Run build
3. Deploy to GitHub Pages on successful build

---

## 4.8 Accessibility & SEO

| Requirement | Details |
|-------------|---------|
| **WCAG 2.1 AA Compliance** | Semantic HTML, high contrast (4.5:1 for text), alt text on all images, keyboard navigation support |
| **Meta Tags** | Title, description, and OpenGraph tags for each page and case study |
| **Sitemap** | Generate `sitemap.xml` and submit to search engines |
| **Robots.txt** | Allow all indexing; include sitemap reference |
| **Analytics** | (Optional) Google Analytics 4 (GA4) to track engagement metrics (S-1, S-2, S-3) |

---

## 4.9 Form Validation & Error Handling

| Field | Validation Rule | Error Message |
|-------|-----------------|----------------|
| **Name** | Required, min 2 chars | "Please enter your full name" |
| **Email** | Required, valid email format | "Please enter a valid email address" |
| **Message** | Required, 10–2000 chars | "Message must be between 10 and 2000 characters" |

**Form States:**
- **Idle:** Ready for input
- **Submitting:** Show loading spinner
- **Success:** Show confirmation message, clear form
- **Error:** Display error message, highlight failed field

---

## 4.10 Performance Targets

| Metric | Target |
|--------|--------|
| **Load Time (LCP)** | < 3 seconds |
| **Lighthouse Score (Mobile)** | ≥ 90 |
| **First Contentful Paint (FCP)** | < 1.8 seconds |
| **Image Optimization** | Total image bytes < 500 KB on first load |
| **Bundle Size** | < 200 KB (gzipped) |

---

## 4.11 Technology Stack (Recommended)

| Layer | Recommendation |
|-------|-----------------|
| **Framework** | React or Next.js |
| **Styling** | Tailwind CSS or CSS Modules |
| **Routing** | React Router (React) or built-in (Next.js) |
| **API** | Serverless function (Next.js API routes or Vercel Functions) or Express.js backend |
| **Deployment** | GitHub Pages (static) or GitHub Pages + serverless for contact API |
| **Package Manager** | npm or yarn |
| **Version Control** | Git + GitHub |
