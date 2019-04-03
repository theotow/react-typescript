const path = require('path');
const fs = require('fs');

module.exports = {
  entry: './index.tsx',
  target: 'web',
  mode: 'production',
  context: path.resolve(__dirname, './src/'),
  resolve: {
    extensions: ['.tsx', '.jsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              ...JSON.parse(
                fs.readFileSync(path.resolve(__dirname, './.babelrc'))
              )
            }
          }
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
