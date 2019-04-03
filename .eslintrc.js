module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'react-app',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules: {}
};
