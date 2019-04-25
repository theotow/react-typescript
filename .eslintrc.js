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
  rules: {
    "jsx-a11y/anchor-is-valid": 0,
    "no-console": 0,
    "no-unused-vars": 0
  }
};
