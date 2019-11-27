module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ['airbnb-base', 'plugin:you-dont-need-lodash-underscore/compatible'],
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 4, { MemberExpression: 0, SwitchCase: 1 }],
    'import/prefer-default-export': 0,
    'no-unused-vars': 'off', // This rule is off because eslint recognises imported Type Definitions as unused
    '@typescript-eslint/type-annotation-spacing': [2], // This rule is set to enforce consistent spacing around annotations
    'max-len': ['error', { code: 150, ignoreStrings: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      }
    }
  }
};
