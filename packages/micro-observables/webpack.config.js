/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const copy = require('copy-webpack-plugin')
const html = require('html-webpack-plugin')

module.exports = (_, argv) => {
  const __DEV__ = argv.mode === 'development'
  return {
    mode: argv.mode || 'production',
    stats: __DEV__ ? 'errors-warnings' : undefined,
    devtool: __DEV__ ? 'cheap-module-eval-source-map' : undefined,
    entry: path.resolve(__dirname, 'src'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: __DEV__ ? 'static/js/[name].js' : 'static/js/[name]-[contenthash].js',
      publicPath: '/',
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    optimization: __DEV__ ? undefined : { minimize: true, splitChunks: { chunks: 'all' } },
    plugins: [
      new copy([
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
        },
      ]),
      new html({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ],
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.(js|ts|tsx)$/i,
          use: [{ loader: 'babel-loader' }],
        },
      ],
    },
    devServer: __DEV__
      ? {
          contentBase: path.resolve(__dirname, 'public'),
          historyApiFallback: true,
          port: 3000,
          watchContentBase: true,
        }
      : undefined,
  }
}
