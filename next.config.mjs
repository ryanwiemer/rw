/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next'

const nextConfig = {
  eslint: {
    // ESLint 9 removed options that Next 14 uses internally; resolve with Next.js upgrade
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom',
    formats: ['image/avif', 'image/webp'],
  },
}

export default withPlaiceholder(nextConfig)
