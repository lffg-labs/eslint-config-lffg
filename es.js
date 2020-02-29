const builtInModules = require('builtin-modules');
const restrictedGlobals = require('confusing-browser-globals');

const ERROR = 'error';
const WARN = 'warn';
const OFF = 'off';

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: ['eslint:recommended', 'prettier'],

  plugins: [
    'jsx-a11y',
    'import',
    'import-helpers',
    'html',
    'prettier',
    'react',
  ],

  env: {
    commonjs: true,
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },

  //
  // TypeScript support:
  //
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: true,
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': ERROR,
        '@typescript-eslint/consistent-type-assertions': ERROR,
        '@typescript-eslint/prefer-namespace-keyword': ERROR,
        '@typescript-eslint/triple-slash-reference': ERROR,
        '@typescript-eslint/class-name-casing': ERROR,
        '@typescript-eslint/no-var-requires': ERROR,
        '@typescript-eslint/no-misused-new': ERROR,
        '@typescript-eslint/no-this-alias': ERROR,
        '@typescript-eslint/ban-ts-ignore': ERROR,
        '@typescript-eslint/ban-types': ERROR,
        '@typescript-eslint/no-use-before-define': [
          ERROR,
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        '@typescript-eslint/no-useless-constructor': WARN,
        '@typescript-eslint/no-array-constructor': WARN,
        '@typescript-eslint/no-unused-vars': [WARN, { args: 'after-used' }],
        '@typescript-eslint/no-namespace': WARN,
        '@typescript-eslint/camelcase': [WARN, { properties: 'never' }],
        '@typescript-eslint/no-inferrable-types': [
          WARN,
          { ignoreParameters: true, ignoreProperties: true },
        ],
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/explicit-member-accessibility': OFF,
        '@typescript-eslint/member-delimiter-style': OFF,
        '@typescript-eslint/interface-name-prefix': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF,
        '@typescript-eslint/no-empty-interface': OFF,
        '@typescript-eslint/no-empty-function': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/indent': OFF,
        'no-useless-constructor': OFF, // TS Equivalent
        'no-dupe-class-members': OFF,
        'no-array-constructor': OFF, // TS Equivalent
        'no-use-before-define': OFF, // TS Equivalent
        'no-this-before-super': OFF,
        'no-const-assign': OFF,
        'no-unused-vars': OFF, // TS Equivalent
        'no-unreachable': OFF,
        'getter-return': OFF,
        'no-new-symbol': OFF,
        'no-dupe-args': OFF,
        'no-dupe-keys': OFF,
        'valid-typeof': OFF,
        'no-redeclare': OFF,
        'default-case': OFF,
        camelcase: OFF, // TS Equivalent
        'no-undef': OFF, // Checked by TS if `strictNullChecks` is `true`.
      },
    },
  ],

  rules: {
    //
    // ESLint Rules
    // https://github.com/eslint/eslint
    //
    'require-atomic-updates': ERROR,
    'no-restricted-globals': [ERROR].concat(restrictedGlobals),
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-native-reassign': ERROR,
    'prefer-rest-params': ERROR,
    'no-import-assign': ERROR,
    'no-new-wrappers': ERROR,
    'no-octal-escape': ERROR,
    'no-implied-eval': ERROR,
    'no-new-object': ERROR,
    'no-new-symbol': ERROR,
    'prefer-spread': ERROR,
    'no-label-var': ERROR,
    'no-iterator': ERROR,
    'no-new-func': ERROR,
    'new-parens': ERROR,
    'no-labels': [ERROR, { allowLoop: true, allowSwitch: false }],
    'no-caller': ERROR,
    radix: [ERROR, 'always'],
    'no-use-before-define': [
      ERROR,
      { functions: false, classes: false, variables: false },
    ],
    'no-whitespace-before-property': WARN,
    'no-template-curly-in-string': WARN,
    'no-unexpected-multiline': WARN, // Recommended -> Warn
    'no-useless-computed-key': WARN,
    'no-useless-constructor': WARN,
    'no-extra-boolean-cast': WARN, // Recommended -> Warn
    'array-callback-return': WARN,
    'no-array-constructor': WARN,
    'prefer-object-spread': WARN,
    'no-unneeded-ternary': WARN,
    'no-unsafe-negation': WARN, // Recommended -> Warn
    'no-param-reassign': WARN,
    'no-useless-return': WARN,
    'no-useless-concat': WARN,
    'no-setter-return': WARN,
    'no-useless-catch': WARN,
    'no-throw-literal': WARN,
    'no-await-in-loop': WARN,
    'no-extend-native': WARN,
    'no-dupe-else-if': WARN,
    'no-regex-spaces': WARN, // Recommended -> Warn
    'no-return-await': WARN,
    'no-useless-call': WARN,
    'no-self-compare': WARN,
    'no-unused-vars': [WARN, { args: 'after-used' }], // Recommended -> Warn
    'no-unreachable': WARN, // Recommended -> Warn
    'no-extra-label': WARN,
    'no-func-assign': WARN,
    'no-lone-blocks': WARN,
    'require-await': WARN,
    'require-yield': WARN, // Recommended -> Warn
    'no-script-url': WARN,
    'no-extra-bind': WARN,
    'default-case': [WARN, { commentPattern: '^no default$' }],
    'guard-for-in': WARN,
    'prefer-const': WARN,
    'dot-notation': WARN,
    'dot-location': [WARN, 'property'],
    'no-loop-func': WARN,
    'no-multi-str': WARN,
    'no-sequences': WARN,
    'unicode-bom': [WARN, 'never'],
    'no-debugger': WARN, // Recommended -> Warn
    'use-isnan': WARN, // Recommended -> Warn
    'no-empty': WARN, // Recommended -> Warn
    'one-var': [WARN, 'never'],
    'no-eval': WARN,
    camelcase: [WARN, { properties: 'never' }],
    'no-var': WARN,
    strict: [WARN, 'never'],
    eqeqeq: WARN,
    yoda: WARN,
    'no-unused-expressions': [
      WARN,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-mixed-operators': [
      WARN,
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-constant-condition': OFF,
    'no-empty-function': OFF,

    //
    // ESLint Plugin JSX a11y
    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    //
    'jsx-a11y/aria-activedescendant-has-tabindex': WARN,
    'jsx-a11y/role-has-required-aria-props': WARN,
    'jsx-a11y/aria-unsupported-elements': WARN,
    'jsx-a11y/role-supports-aria-props': WARN,
    'jsx-a11y/no-distracting-elements': WARN,
    'jsx-a11y/heading-has-content': WARN,
    'jsx-a11y/no-redundant-roles': WARN,
    'jsx-a11y/anchor-has-content': WARN,
    'jsx-a11y/img-redundant-alt': WARN,
    'jsx-a11y/iframe-has-title': WARN,
    'jsx-a11y/anchor-is-valid': WARN,
    'jsx-a11y/aria-proptypes': WARN,
    'jsx-a11y/no-access-key': WARN,
    'jsx-a11y/aria-props': WARN,
    'jsx-a11y/aria-role': [WARN, { ignoreNonDOM: true }],
    'jsx-a11y/alt-text': WARN,
    'jsx-a11y/scope': WARN,
    'jsx-a11y/accessible-emoji': OFF,

    //
    // ESLint Plugin Import
    // https://github.com/benmosher/eslint-plugin-import
    //
    'import/no-webpack-loader-syntax': ERROR,
    'import/no-amd': ERROR,
    'import/newline-after-import': [WARN, { count: 1 }],
    'import/no-default-export': WARN,
    'import/no-named-default': WARN,
    'import/first': WARN,

    //
    // ESLint Plugin Import Helpers
    // https://github.com/Tibfib/eslint-plugin-import-helpers
    //
    'import-helpers/order-imports': [
      WARN,
      {
        groups: [
          [`/^(${builtInModules.join('|')})$/`],
          ['absolute'],
          ['module'],
          ['/^(@|~)//'],
          ['parent'],
          ['sibling'],
          ['index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
        newlinesBetween: 'never',
      },
    ],

    //
    // React
    // (Fixes https://github.com/typescript-eslint/typescript-eslint/issues/111)
    //
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,

    //
    // Prettier:
    //
    'prettier/prettier': [
      WARN,
      {
        trailingComma: 'es5',
        arrowParens: 'always',
        singleQuote: true,
        printWidth: 80,
        semi: true,
      },
    ],
  },
};
