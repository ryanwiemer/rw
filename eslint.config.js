const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**'],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ),
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['*.config.js', '*.config.ts', 'eslint.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]

module.exports = eslintConfig
