# ✨ Luiz Felipe's ESLint configuration

This is a monorepo which contains my ESLint configurations:

## 💫 [`eslint-config-lffg`](https://github.com/lffg/eslint-config-lffg/tree/master/packages/eslint-config-lffg)

The `eslint-config-lffg` configuration is my main configuration. I use it across all my projects to enforce my conventions.

Install it:

```shell
yarn add eslint eslint-config-lffg --dev
```

## ⚛️ [`eslint-config-lffg-react`](https://github.com/lffg/eslint-config-lffg/tree/master/packages/eslint-config-lffg-react)

The `eslint-config-lffg-react` is a kind of extension to my main one, as it only adds some rules of React-related ESLint plugins, such as [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks). Please note that, although it is not required, the `eslint-config-lffg` ESLint configuration is a _peer dependency_ of this module.

Install it:

```shell
yarn add eslint eslint-config-lffg eslint-config-lffg-react --dev
```

## 📖 License

Copyright (c) 2019-current Luiz Felipe Gonçalves.
Each package has its own MIT license.
