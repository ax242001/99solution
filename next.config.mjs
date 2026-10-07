/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable persistent filesystem pack caching in dev on Windows to prevent ENOENT rename / missing chunk races
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
