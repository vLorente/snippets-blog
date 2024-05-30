---
title: Configurar ESLint y Prettier para Next.JS
published: 2024-05-30
description: Esta guía describe cómo configurar VSCode, ESLint y Prettier para mantener un código limpio y consistente en un proyecto Next.js.
tags: [ESLint, Prettier, Next.js, React]
category: Frontend
draft: false
---

## VSCode Workspace settings

Para una mejor integración en VSCode, asegúrate de tener instaladas las extensiones de ESLint y Prettier y configura tu archivo settings.json de VSCode de la siguiente manera:

```json
{
 "explorer.fileNesting.enabled": true,
 "explorer.fileNesting.expand": false,
 "explorer.fileNesting.patterns": {
  "package.json": "pnpm-lock.yaml, package-lock.json, yarn.lock",
  ".prettierrc.mjs": ".prettierignore",
  "README.md": "README.md"
 },
 "editor.linkedEditing": true,
 "editor.codeActionsOnSave": {
  "source.organizeImports": "explicit"
 },
 "editor.defaultFormatter": "esbenp.prettier-vscode",
 "editor.formatOnSave": true,
 "files.associations": {
  "*.svg": "html"
 },
 "eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
 ],
 "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
 "typescript.format.insertSpaceBeforeFunctionParenthesis": false,
 "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
 "typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
 "editor.insertSpaces": false,
 "editor.detectIndentation": false
}
```

## Configuración Lintern

### Instalación de dependencias

Primero, instala las dependencias necesarias para ESLint, Prettier y los plugins específicos para React, React Hooks y accesibilidad:

```sh
# ESLint and TypeScript
pnpm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-jsx-a11y

# Prettier
pnpm i -D prettier eslint-config-prettier eslint-plugin-prettier

# NEXT
pnpm i -D @next/eslint-plugin-next

# React
pnpm i -D eslint-plugin-react eslint-plugin-react-hook
```

### Fichero de configuración de Eslint

Crea o actualiza el archivo .eslintrc.js en la raíz del proyecto con la siguiente configuración:

```javascript
// .eslintrc.js
process.env.ESLINT_TSCONFIG = "frontend/tsconfig.json"

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
 env: {
  es2023: true,
  node: true,
  browser: true,
 },
 parser: "@typescript-eslint/parser",
 parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
 },
 settings: {
  next: {
   rootDir: "frontend/",
  },
  react: {
   version: "detect",
  },
 },
 extends: [
  "next",
  "next/core-web-vitals",
  "plugin:@next/next/recommended",
  "eslint:recommended",
  "prettier",
  "plugin:@typescript-eslint/recommended",
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "plugin:jsx-a11y/recommended",
 ],
 plugins: ["@typescript-eslint", "prettier"],
 rules: {
  "eol-last": "off",
  "jsx-quotes": ["warn", "prefer-double"],
  "quotes": ["warn", "double"],
  "semi": ["warn", "never"],
  "@stylistic/js/no-tabs": "off",
  "@stylistic/ts/indent": "off",
  "no-constant-binary-expression": "warn",
  "no-debugger": "warn",
  "no-extend-native": "off",
  "no-trailing-spaces": "warn",
  "space-before-function-paren": "off",
  "antfu/if-newline": "off",
  "antfu/top-level-function": "off",
  "@stylistic/js/operator-linebreak": "off",
  "@stylistic/ts/brace-style": "off",
  "@stylistic/js/multiline-ternary": "off",
  "n/prefer-global/process": "off",
  "@stylistic/js/no-mixed-spaces-and-tabs": "off",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "off",
  // "unused-imports/no-unused-imports": "warn",
  "object-curly-newline": [
   "warn",
   {
    consistent: true,
    multiline: true,
   },
  ],
  "object-curly-spacing": ["warn", "always"],
  "array-element-newline": ["warn", "consistent"],
  "array-bracket-newline": ["warn", "consistent"],
  "prettier/prettier": "warn",
 },
 ignorePatterns: [
  "pnpm-lock.yaml",
  "package-lock.json",
  "yarn.lock",
  "node_modules/*",
  "dist/*",
  "public/*",
  "html/*",
  ".vercel /*",
 ],
}
```

### Fichero de configuración de Prettier

Crea o actualiza el archivo .prettierrc.mjs en la raíz del proyecto con la siguiente configuración:

```sh
// .prettierrc
{
  "semi": false,
  "singleQuote": false,
  "jsxSingleQuote": false,
  "tsxSingleQuote": false,
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 2,
  "endOfLine": "auto"
}
```

En mi caso me gusta trabajar con Javascript y Typescript sin los puntos y coma, por eso el parámetro `"semi": false`, si por lo contrario prefieres trabajar con punto y coma, configura `"semi": true`.

## Ejecución de ESLint

Configura el script lint en tu package.json:

```json
// ...
"scripts": {
  "lint": "eslint . --ext js,jsx,ts,tsx"
}

```

Para verificar que todo esté configurado correctamente, puedes ejecutar ESLint manualmente con el siguiente comando:

```sh
pnpm run lint
```
