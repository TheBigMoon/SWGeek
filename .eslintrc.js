module.exports = {
  'env': {
    'browser': true,
    'es2020': true
  },
  'extends': 'airbnb',
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 11,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'quote-props': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'camelcase': 'off'
  }
};
