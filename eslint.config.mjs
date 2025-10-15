// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // スタイリングルールを追加
    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/space-before-function-paren': ['error', 'always'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/space-before-blocks': 'error',
  },
})
