module.exports = api => {
  api.cache(true)
  return {
    presets: [['next/babel']],
    plugins: [['module-resolver', { alias: { '~': './src' }, extensions: ['.js', '.ts', '.tsx'] }]],
  }
}
