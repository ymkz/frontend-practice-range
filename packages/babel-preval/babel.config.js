module.exports = api => {
  api.cache(true)
  return {
    presets: [['next/babel']],
    plugins: [['macros'], ['module-resolver', { alias: { '~': './src' }, extensions: ['.js', '.ts', '.tsx'] }]],
  }
}
