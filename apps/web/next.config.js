/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/math-helpers"],
};

module.exports = nextConfig;
