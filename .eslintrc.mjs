module.exports = {
  extends: [
    'airbnb-typescript/base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // Allow require for CommonJS
    '@typescript-eslint/no-require-imports': 'error', // Require import instead of require
    '@typescript-eslint/explicit-function-return-type': ['error', { allowImplicit: true }]
  }
};