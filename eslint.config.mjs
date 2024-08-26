import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: ['dist/**', 'coverage/**'], // Игнорировать папки dist и coverage
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      'semi': ['error', 'always'], // Требовать точку с запятой в конце выражений
      'quotes': ['error', 'single'], // Требовать одинарные кавычки
      '@typescript-eslint/no-unused-vars': 'warn', // Предупреждать об неиспользуемых переменных
      '@typescript-eslint/no-unused-expressions': 'off', // Отключить правило для неиспользуемых выражений
      '@typescript-eslint/no-require-imports': 'off', // Отключить правило для использования require()
      '@typescript-eslint/no-explicit-any': 'off', // Отключить предупреждение об использовании any
    },
  },
  {
    ignores: ['dist/**', 'coverage/**'], // Игнорировать папки dist и coverage
  },
];
