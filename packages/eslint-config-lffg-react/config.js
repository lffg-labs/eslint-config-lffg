const ERROR = 'error';
const WARN = 'warn';
// eslint-disable-next-line no-unused-vars
const OFF = 'off';

module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: ['react', 'react-hooks'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  settings: {
    // Override this option in your own .eslintrc.json file.
    react: {
      version: 'latest'
    }
  },

  rules: {
    //
    // ESLint Plugin React
    // https://github.com/yannickcr/eslint-plugin-react
    //
    'react/require-render-return': ERROR,
    'react/react-in-jsx-scope': ERROR,
    'react/jsx-no-undef': ERROR,
    'react/no-typos': ERROR,
    'react/forbid-foreign-prop-types': [WARN, { allowInPropTypes: true }],
    'react/jsx-no-comment-textnodes': WARN,
    'react/no-direct-mutation-state': WARN,
    'react/no-danger-with-children': WARN,
    'react/jsx-no-duplicate-props': WARN,
    'react/jsx-no-target-blank': WARN,
    'react/style-prop-object': WARN,
    'react/jsx-pascal-case': WARN,
    'react/jsx-uses-react': WARN,
    'react/jsx-uses-vars': WARN,
    'react/no-is-mounted': WARN,

    //
    // ESLint Plugin React Hooks
    // https://github.com/facebook/react
    //
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN
  }
};
