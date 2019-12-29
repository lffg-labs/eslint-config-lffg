# ✨ Luiz Felipe's ESLint configuration

This is a monorepo which contains my ESLint configurations:

## 💫 [ESLint Config LFFG](https://github.com/lffg/eslint-config-lffg/tree/master/packages/eslint-config-lffg)

- [`packages/eslint-config-lffg`](https://github.com/lffg/eslint-config-lffg/tree/master/packages/eslint-config-lffg)

The `eslint-config-lffg` configuration is my main configuration. I use it across all my projects to enforce my conventions.

Install it:

```shell
yarn add eslint eslint-config-lffg --dev
```

## ⚛️ [ESLint Config LFFG React](https://github.com/lffg/eslint-config-lffg/tree/master/packages/eslint-config-lffg-react)

- [`packages/eslint-config-lffg-react`](https://github.com/lffg/eslint-config-lffg/tree/master/packages/eslint-config-lffg-react)

The `eslint-config-lffg-react` is a kind of extension to my main one, as it only adds some rules of React-related ESLint plugins, such as [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks). Please note that, although it is not required, the `eslint-config-lffg` ESLint configuration is a _peer dependency_ of this module.

Install it:

```shell
yarn add eslint eslint-config-lffg eslint-config-lffg-react --dev
```

## 🚀 Quick Start

Install the dependencies:

```shell
yarn add eslint eslint-config-lffg --dev

# Or, if you're using React:
yarn add eslint eslint-config-lffg eslint-config-lffg-react --dev
```

Create a file named `.eslintrc.json` in the root of your project:

```js
{
  "extends": ["lffg"]
}

// Or:

{
  "extends": ["lffg", "lffg-react"]
}
```

Add the following scripts to your `package.json`:

```js
"scripts": {
  "lint": "yarn lint:raw .",
  "lint:fix": "yarn lint:raw --fix .",
  "lint:raw": "eslint --ext .js,.jsx,.ts,.tsx --max-warnings=0",
}
```

Then, you will be able to run:

- `lint`, to run the linter _without_ correcting any problems;
- `lint:fix`, to run the linter _and_ correct all the _fixable_ problems;
- `lint:raw`, to run the linter with custom options—I personally use that in some CI environments.

## 📖 License

Copyright &copy; 2019-current [Luiz Felipe Gonçalves](https://luizfelipe.dev).  
Each package has its own MIT license.
