/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve resized, modern-format images instead of the original multi-megabyte files.
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // The journal moved from /gallery to /journal.
      { source: "/gallery", destination: "/journal", permanent: true },
      { source: "/gallery/photos", destination: "/journal/photos", permanent: true },
      // Short addresses for the book.
      { source: "/book", destination: "/book/towards-deep-tech-in-africa", permanent: false },
      { source: "/sample", destination: "/book/sample", permanent: false },
    ]
  },
}

export default nextConfig
