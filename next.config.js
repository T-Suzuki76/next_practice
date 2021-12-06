/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental:{
    optimizeFonts: true,
    optimizeImages: true,
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
}
