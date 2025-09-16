/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ruby', // Apenas esta linha é necessária
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;