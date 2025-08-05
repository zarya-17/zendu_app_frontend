import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig,
    ],
    files: ['**/*.{ts,tsx,js}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.app.json',
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'warn',
      'eol-last': ['warn', 'always'],
      'import/no-unresolved': 'error',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Group for built-in modules (e.g., node.js core modules)
            ['^react', '^react-dom'],
            // Group for external dependencies (e.g., libraries from node_modules)
            ['^\\w', '^@?\\w'],
            // Group for internal modules (project imports)
            [
              '^@app',
              '^@entities',
              '^@features',
              '^@pages',
              '^@shared',
              '^@widgets',
            ],
            // Group for styles
            ['^.*\\.s?css$'],
            // Group for relative imports
            ['^\\.'],
          ],
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  }
);
