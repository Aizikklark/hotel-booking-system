import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Используем ts-jest для работы с TypeScript
  testEnvironment: 'node', // Тестовая среда - Node.js
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Трансформация всех файлов .ts и .tsx с использованием ts-jest
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Расширения файлов, которые будет обрабатывать Jest
  transformIgnorePatterns: ['/node_modules/'], // Игнорирование node_modules для трансформации
  collectCoverageFrom: ['src/**/*.{ts,tsx}'], // Сбор покрытия кода только из файлов TypeScript в папке src
  coverageDirectory: 'coverage', // Директория, в которую Jest будет сохранять файлы покрытия кода
  coverageProvider: 'v8', // Использование провайдера V8 для покрытия кода
  clearMocks: true, // Автоматическая очистка моков перед каждым тестом
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Настройка файлов после окружения
};

export default config;
