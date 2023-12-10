/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
};

module.exports = nextConfig;
