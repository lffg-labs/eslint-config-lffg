const WARN = 'warn';
const OFF = 'off';

const pagesGlob = 'pages/**/*.{js,jsx,ts,tsx}';

module.exports = {
  overrides: [
    {
      files: [pagesGlob, `src/${pagesGlob}`],
      rules: {
        'import/prefer-default-export': WARN,
        'import/no-default-export': OFF
      }
    }
  ]
};
