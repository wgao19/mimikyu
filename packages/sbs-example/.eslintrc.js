module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
  ],
  plugins: ['flowtype'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    strict: 0,
    'import/first': 0,
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
