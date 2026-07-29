import type { NextConfig } from 'next';
import { withPlausibleProxy } from 'next-plausible';

const nextConfig: NextConfig = withPlausibleProxy({
  src: 'https://plausible.achilles.berlin/js/pa-5S8FvFNJ6-I7q2DS1hP6n.js',
})({
  output: 'standalone',
  images: {
    remotePatterns: [new URL('https://is1-ssl.mzstatic.com/image/thumb/**')],
  },
});

export default nextConfig;
