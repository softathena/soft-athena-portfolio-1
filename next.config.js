/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    // Suppress deprecation warnings coming from node_modules Sass dependencies.
    quietDeps: true,
  },
};

module.exports = nextConfig;
