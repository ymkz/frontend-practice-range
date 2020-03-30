/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  devIndicators: { autoPrerender: false },
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src')
    return config
  },
}
