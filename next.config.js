const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  // Suppress lockfile warning
  outputFileTracingRoot: path.resolve(__dirname),
};

module.exports = nextConfig;
