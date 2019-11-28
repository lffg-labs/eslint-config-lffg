# ⚛️ ✨ `eslint-config-lffg-react`

My React ESLint configuration (`eslint-config-lffg-react`).

## ℹ️ List of plugins that are being used

- Plugin list:
  - [`react`](https://www.npmjs.com/package/eslint-plugin-react);
  - [`react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks).

## 📦 How to use it?

Install it:

```shell
yarn add eslint eslint-config-lffg eslint-config-lffg-react --dev
```

<sup>Please note that, although it is not required, the `eslint-config-lffg` ESLint configuration is a _peer dependency_ of this module.</sup>

Then create a `.eslintrc.json` file in your project's root:

```json
{
  "extends": ["lffg", "lffg-react"]
}
```

## 📖 License

Copyright (c) 2019-current [Luiz Felipe Gonçalves](https://luizfelipe.dev).  
MIT License.
