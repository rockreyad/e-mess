/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@repo/ui",
    "@repo/math-helpers",
    "@repo/tailwind-config",
  ],
};

module.exports = nextConfig;
