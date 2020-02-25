module.exports = api => {
  api.cache(true)
  return {
    presets: [
      ['@babel/preset-env', { modules: false, targets: { esmodules: true } }],
      ['@babel/preset-react'],
      ['@babel/preset-typescript'],
    ],
    plugins: [
      ['@babel/plugin-proposal-class-properties'],
      ['module-resolver', { alias: { '~': './src' }, extensions: ['.js', '.ts', '.tsx'] }],
    ],
  }
}
