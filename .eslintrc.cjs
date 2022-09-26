module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': 1,
    'react/react-in-jsx-scope': 0,
    'react/jsx-curly-brace-presence': [
      2,
      {
        props: 'never',
        children: 'ignore',
      },
    ],
    'react/self-closing-comp': 2,
    'react/display-name': 0,
  },
};
