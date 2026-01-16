# Portfolio Site

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark theme with accent colors
- ✅ Case study showcase with dynamic routing
- ✅ Contact form with Formspree integration (optimized for static hosting)
- ✅ Client-side validation
- ✅ SEO optimized with metadata
- ✅ Accessibility-focused (WCAG 2.1 AA)
- ✅ Performance optimized (image lazy-loading, optimized assets)

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: Next.js App Router
- **Forms**: Formspree (static site compatible)
- **Deployment**: GitHub Pages with GitHub Actions CI/CD
- **Fonts**: Optimized with `next/font` for better performance

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

2. **Set up environment variables** (optional for development):
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your Formspree endpoint.

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
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

### GitHub Pages Setup

1. **Configure repository**:
   - Go to your repository Settings → Pages
   - Set `Source` to "GitHub Actions" (not "Deploy from a branch")
   - Ensure the `main` branch exists

2. **Set up Formspree** (for contact form):
   - Go to [https://formspree.io](https://formspree.io) and create a free account
   - Create a new form and copy your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
   - Add it as a GitHub Secret:
     - Go to Settings → Secrets and variables → Actions
     - Add a new secret: `NEXT_PUBLIC_FORMSPREE_ENDPOINT` with your Formspree endpoint
   - Or set it locally in `.env.local` for development:
     ```
     NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
     ```

3. **Deploy**:
   ```bash
   git push origin main
   ```

   The GitHub Actions workflow will automatically:
   - Build your Next.js site as a static export
   - Deploy to GitHub Pages
   - Your site will be available at:
     - `https://<username>.github.io` (if repository is named `<username>.github.io`)
     - `https://<username>.github.io/<repository-name>` (for project repositories)

### Project Repository vs User Site

- **User site** (`username.github.io`): Deploy to root URL, no basePath needed
- **Project repository**: If deploying to a project repo, update `next.config.js`:
  ```js
  basePath: '/repository-name',
  ```

### Custom Domain (Optional)

1. Add a `CNAME` file to `public/` with your domain (e.g., `portfolio.yourdomain.com`)
2. Configure DNS records to point to GitHub Pages
3. Enable custom domain in repository settings → Pages

## Performance Targets

- Load Time (LCP): < 3 seconds
- Lighthouse Score (Mobile): ≥ 90
- First Contentful Paint (FCP): < 1.8 seconds
- Image bytes on first load: < 500 KB
- Bundle size (gzipped): < 200 KB

## Contact Form

The contact form uses **Formspree** for static site hosting compatibility. Since GitHub Pages only serves static files, API routes won't work.

### Setup Instructions

1. **Create a Formspree account**:
   - Go to [https://formspree.io](https://formspree.io)
   - Sign up for a free account (50 submissions/month free)

2. **Create a form**:
   - Click "New Form"
   - Copy your form endpoint (format: `https://formspree.io/f/YOUR_FORM_ID`)

3. **Configure the endpoint**:
   - **For development**: Create `.env.local`:
     ```
     NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
     ```
   - **For production**: Add as GitHub Secret (see Deployment section)

4. **Test the form**:
   - Submit a test message through your contact form
   - Check your Formspree dashboard for the submission
   - Configure email notifications in Formspree settings

### Note on API Routes

The `src/app/api/contact/route.ts` file exists but won't work with static export. It's kept for reference but the contact form now uses Formspree instead.

## Accessibility

The site meets WCAG 2.1 AA standards:
- ✅ Semantic HTML
- ✅ High contrast (4.5:1 ratio)
- ✅ Alt text on all images
- ✅ Keyboard navigation support
- ✅ Screen reader compatible

## License

© 2025 Ryan Leskiw. All rights reserved.
