# `eslint-config-lffg` ✨💫

My personal ESLint configuration, which I use for almost all my projects. It is highly opinionated, and includes Prettier and TypeScript support by default.

## 🚀 Quick Start

Install it:

```shell
yarn add eslint eslint-config-lffg --dev
```

Add the following to your `package.json`:

```json
"eslintConfig": {
  "extends": "lffg"
},
"scripts": {
  "lint": "yarn lint:raw .",
  "lint:fix": "yarn lint:raw --fix .",
  "lint:raw": "eslint --ext .js,.jsx,.ts,.tsx --max-warnings=0"
}
```

Then, you will be able to run:

- `lint`, to run the linter _without_ correcting any problems;
- `lint:fix`, to run the linter _and_ correct all the _fixable_ problems;
- `lint:raw`, to run the linter with custom options. I personally use that in some CI environments.

## ⚙️ Custom Configurations

By default, `eslint-config-lffg` extends three subconfigurations, which are also included in this repository:

- `es`, which lints ECMAScript (JavaScript) and TypeScript files;
- `react`, which lints files that uses React;
- `pages-default-esm`, which requires you to use _default_ and not _named_ exports within the `pages` or `src/pages` directory.

If you are not using React, you may only extend the `es` configuration:

```json
{
  "extends": "lffg/es"
}
```

## 📖 License

Copyright &copy; 2019-current [Luiz Felipe Gonçalves](https://luizfelipe.dev).  
MIT Licensed.
