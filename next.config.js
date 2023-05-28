/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: "Access-Control-Allow-Origin", value: "*" },
  { key: "X-Frame-Options", value: "ALLOW-FROM https://facebook.com" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { serverActions: true, },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  i18n: {
    locales: ["bg"],
    defaultLocale: "bg",
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
