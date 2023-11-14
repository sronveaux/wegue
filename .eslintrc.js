module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'plugin:vuetify/recommended',
    'plugin:@intlify/vue-i18n/recommended',
    '@vue/standard'
  ],
  rules: {
    /* eslint-disable quote-props */
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // allow semicolons and the end of a statement
    'semi': 'off',

    // weaken some rules in development mode
    'no-multiple-empty-lines': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-unused-vars': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'space-before-blocks': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'space-before-function-paren': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'object-curly-spacing': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'indent': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'comma-dangle': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'comma-spacing': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'quotes': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'padded-blocks': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'keyword-spacing': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'arrow-spacing': process.env.NODE_ENV === 'development' ? 'warn' : 'error'
    /* eslint-enable quote-props */
  },
  settings: {
    'vue-i18n': {
      localeDir: [
        {
          pattern: './src/locales/*.json',
          localeKey: 'file'
        },
        {
          pattern: './app/locales/*.json',
          localeKey: 'file'
        }
      ],
      messageSyntaxVersion: '^8.0.0'
    }
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
