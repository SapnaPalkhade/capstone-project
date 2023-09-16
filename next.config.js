// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src');
    return config;
  },
};


module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/LoginPage/LoginPage',
          permanent: true,
        },
      ]
    },
  }