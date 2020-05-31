module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error', {
        'semi': false,
        'singleQuote': true
      }
    ],
    "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "off", "ignoreRestSiblings": true }],
    'no-unused-expressions': 'off'
  }
}
