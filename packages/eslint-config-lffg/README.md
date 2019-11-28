# ✨ 💫 `eslint-config-lffg`

My base ESLint configuration (`eslint-config-lffg`). I use it across all my projects. Its main style conventions are:

- 2 spaces for indentation;
- Semicolons required;
- Single quotes;
- Parenthesis in arrow functions are always required.

## ℹ️ List of plugins and other configs that are being used

- Extended configuration list:
  - `eslint:recommended`;
  - [`prettier`](https://www.npmjs.com/package/eslint-config-prettier).
- Plugin list:
  - [`react`](https://www.npmjs.com/package/eslint-plugin-react);
  - [`react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks);
  - [`jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y);
  - [`import`](https://www.npmjs.com/package/eslint-plugin-import);
  - [`import-helpers`](https://www.npmjs.com/package/eslint-plugin-import-helpers);
  - [`html`](https://www.npmjs.com/package/eslint-plugin-html);
  - [`prettier`](https://www.npmjs.com/package/eslint-plugin-prettier).

## 📦 How to use it?

Install it:

```shell
yarn add eslint eslint-config-lffg --dev
```

Then create a `.eslintrc.json` file in your project's root:

```json
{
  "extends": ["lffg"]
}
```

## 📖 License

Copyright (c) 2019-current [Luiz Felipe Gonçalves](https://luizfelipe.dev).  
MIT License.
