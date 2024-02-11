/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  reactStrictMode: false,
  transpilePackages: [
    "@turbocharger/ui",
    "@turbocharger/utils",
    "@turbocharger/database",
  ],
};

export default nextConfig;
