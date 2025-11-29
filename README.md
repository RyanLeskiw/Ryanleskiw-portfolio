# Portfolio Site

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark theme with accent colors
- ✅ Case study showcase with dynamic routing
- ✅ Contact form with server-side validation
- ✅ Rate limiting on contact submissions
- ✅ SEO optimized with metadata
- ✅ Accessibility-focused (WCAG 2.1 AA)
- ✅ Performance optimized (image lazy-loading, optimized assets)

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: Next.js App Router
- **API**: Next.js API Routes
- **Deployment**: GitHub Pages with GitHub Actions CI/CD

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── work/              # Work/case studies pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
├── data/                  # Static data (case studies)
└── types/                 # TypeScript type definitions

public/
└── assets/                # Images and static files
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Add Case Studies

Edit `src/data/caseStudies.ts` and follow the `CaseStudy` interface in `src/types/index.ts`.

### Update Colors & Typography

Edit `tailwind.config.ts` to modify:
- `colors.bg-dark` - Background color
- `colors.text-light` - Text color
- `colors.accent-green` - Accent/interactive color
- `fontFamily` - Custom fonts

### Add Images

Place images in `public/assets/` and reference them in case study data or components.

## Deployment

### GitHub Pages

1. **Configure repository**:
   - Set `Source` to "GitHub Actions" in repository settings
   - Ensure the `main` branch exists

2. **Deploy**:
   ```bash
   git push origin main
   ```

   The GitHub Actions workflow will automatically build and deploy to `https://<username>.github.io`

### Custom Domain (Optional)

1. Add a `CNAME` file to `public/` with your domain
2. Configure DNS records to point to GitHub Pages
3. Enable custom domain in repository settings

## Performance Targets

- Load Time (LCP): < 3 seconds
- Lighthouse Score (Mobile): ≥ 90
- First Contentful Paint (FCP): < 1.8 seconds
- Image bytes on first load: < 500 KB
- Bundle size (gzipped): < 200 KB

## Contact Form

The contact form currently logs submissions to the console. To enable email notifications:

1. **Install email service** (e.g., SendGrid, Nodemailer)
2. **Add API key** to `.env.local`:
   ```
   SENDGRID_API_KEY=your_key_here
   ```
3. **Update** `src/app/api/contact/route.ts` to send emails

## Accessibility

The site meets WCAG 2.1 AA standards:
- ✅ Semantic HTML
- ✅ High contrast (4.5:1 ratio)
- ✅ Alt text on all images
- ✅ Keyboard navigation support
- ✅ Screen reader compatible

## License

© 2025 Ryan Leskiw. All rights reserved.
