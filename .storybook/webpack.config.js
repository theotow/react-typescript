const webpack = require('../webpack.config');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: webpack.module.rules,
  },
};
