# React + TypeScript + Vite

![Screenshot 2023-09-13 083059](https://github.com/grouciyacine/portfolio3D/assets/107037694/ba6fdb79-c227-4d69-b682-3965c45bbf2e)
![Screenshot 2023-09-13 083120](https://github.com/grouciyacine/portfolio3D/assets/107037694/e500472b-7729-47ac-bfd9-0c49b39b40c6)
![Screenshot 2023-09-13 083136](https://github.com/grouciyacine/portfolio3D/assets/107037694/6d9d31fa-57b3-4178-ba48-14a1da298f8f)
![Screenshot 2023-09-13 083151](https://github.com/grouciyacine/portfolio3D/assets/107037694/1e4f1108-6bcf-4ff4-bf10-70ff5b4653c9)
![Screenshot 2023-09-13 083211](https://github.com/grouciyacine/portfolio3D/assets/107037694/5a8ff6ca-71d9-41b8-b4db-03a5df17e484)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends list` list
