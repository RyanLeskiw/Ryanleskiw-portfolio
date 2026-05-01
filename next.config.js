/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // For GitHub Pages:
  // - If deploying to username.github.io (user site): leave basePath empty
  // - If deploying to username.github.io/repo-name (project repo): set basePath to '/repo-name'
  // Example: basePath: '/Ryanleskiw-portfolio',
  basePath: '',
  // For GitHub Pages, trailingSlash helps with routing
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Required for static export
  },
  compress: true,
  swcMinify: true,
}

module.exports = nextConfig
