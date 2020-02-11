/* eslint-disable @typescript-eslint/no-var-requires */

const frontmatter = require('remark-frontmatter')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: { remarkPlugins: [frontmatter] },
})

module.exports = withMDX({
  poweredByHeader: false,
  reactStrictMode: true,
  devIndicators: { autoPrerender: false },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
})
