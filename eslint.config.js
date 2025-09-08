import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactCompiler from 'eslint-plugin-react-compiler';
import unusedImports from 'eslint-plugin-unused-imports';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  { ignores: ['dist', '.react-router'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strict,
      eslintPluginPrettier,
      reactRefresh.configs.vite,
    ],
    files: ['**/*.{ts,tsx}', '.react-router/types/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    plugins: {
      react,
      'unused-imports': unusedImports,
      'react-hooks': reactHooks,
      'react-compiler': reactCompiler,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'react-hooks/react-compiler': 'error',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'error',

      'react-compiler/react-compiler': 'error',
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      '@typescript-eslint/no-namespace': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
);
