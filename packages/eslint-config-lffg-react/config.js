const lffgConfig = require('eslint-config-lffg');

if (!lffgConfig) {
  throw new Error(
    'You must install `eslint-config-lffg` as a development dependency to use `eslint-config-lffg-react`.'
  );
}

const { root, parser, env, parserOptions, overrides } = lffgConfig;

const ERROR = 'error';
const WARN = 'warn';

module.exports = {
  root,
  env,
  parser,
  parserOptions,
  overrides,

  plugins: ['react', 'react-hooks'],

  settings: {
    react: {
      // Override this option in your own .eslintrc.json file, if needed.
      version: 'latest'
    }
  },

  rules: {
    //
    // ESLint Plugin React
    // https://github.com/yannickcr/eslint-plugin-react
    //
    'react/void-dom-elements-no-children': ERROR,
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
    'react/self-closing-comp': WARN,
    'react/jsx-pascal-case': WARN,
    'react/jsx-uses-react': WARN,
    'react/jsx-uses-vars': WARN,
    'react/no-is-mounted': WARN,
    'react/jsx-key': [WARN, { checkFragmentShorthand: true }],

    //
    // ESLint Plugin React Hooks
    // https://github.com/facebook/react
    //
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN
  }
};
