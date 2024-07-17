/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://hub.tikplan.ir/api/:path*'
      }
    ]
  }
}

export default nextConfig
