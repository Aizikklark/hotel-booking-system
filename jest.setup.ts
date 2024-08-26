import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './src/models/User';

// Мокаем зависимости
jest.mock('bcrypt', () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));

jest.mock('./src/models/User', () => ({
  create: jest.fn(),
  findOne: jest.fn(),
}));
