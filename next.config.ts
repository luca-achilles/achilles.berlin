import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [new URL('https://is1-ssl.mzstatic.com/image/thumb/**')],
  },
};

export default nextConfig;
