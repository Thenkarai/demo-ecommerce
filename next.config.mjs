/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion', 'lucide-react'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;

