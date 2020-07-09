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
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'quote-props': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'camelcase': 'off',
    'no-return-await': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'off'
  }
};
