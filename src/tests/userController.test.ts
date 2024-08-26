import { Request, Response } from 'express';
import { registerUser, loginUser } from '../controllers/userController';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Мокаем зависимости
jest.mock('bcrypt', () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));

jest.mock('../models/User', () => ({
  create: jest.fn(),
  findOne: jest.fn(),
}));

describe('User Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });

    req = {
      body: {},
    };

    res = {
      status: statusMock,
      json: jsonMock,
    };

    jest.clearAllMocks(); // Очистка всех моков перед каждым тестом
  });

  describe('registerUser', () => {
    it('should register a new user successfully', async () => {
      const mockUser = { id: 1, username: 'testuser', email: 'test@example.com', password: 'hashedpassword' };
      req.body = { username: 'testuser', email: 'test@example.com', password: 'password' };

      (bcrypt.hash as jest.Mock).mockResolvedValue('hashedpassword');
      (User.create as jest.Mock).mockResolvedValue(mockUser);

      await registerUser(req as Request, res as Response);

      expect(bcrypt.hash).toHaveBeenCalledWith('password', 10);
      expect(User.create).toHaveBeenCalledWith({ username: 'testuser', email: 'test@example.com', password: 'hashedpassword' });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: 'User registered successfully', user: mockUser });
    });

    it('should handle errors when registering a user', async () => {
      req.body = { username: 'testuser', email: 'test@example.com', password: 'password' };

      const error = new Error('Registration error');
      (bcrypt.hash as jest.Mock).mockRejectedValue(error);

      await registerUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error registering user', error });
    });
  });

  describe('loginUser', () => {
    it('should log in a user successfully', async () => {
      const mockUser = { id: 1, username: 'testuser', email: 'test@example.com', password: 'hashedpassword' };
      req.body = { email: 'test@example.com', password: 'password' };

      (User.findOne as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      (jwt.sign as jest.Mock).mockReturnValue('mocktoken');

      await loginUser(req as Request, res as Response);

      expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
      expect(bcrypt.compare).toHaveBeenCalledWith('password', 'hashedpassword');
      expect(jwt.sign).toHaveBeenCalledWith({ id: mockUser.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
      expect(res.json).toHaveBeenCalledWith({ message: 'Login successful', token: 'mocktoken' });
    });

    it('should return 404 if user not found', async () => {
      req.body = { email: 'test@example.com', password: 'password' };

      (User.findOne as jest.Mock).mockResolvedValue(null);

      await loginUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
    });

    it('should return 401 if password is incorrect', async () => {
      const mockUser = { id: 1, username: 'testuser', email: 'test@example.com', password: 'hashedpassword' };
      req.body = { email: 'test@example.com', password: 'wrongpassword' };

      (User.findOne as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await loginUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
    });

    it('should handle errors when logging in a user', async () => {
      req.body = { email: 'test@example.com', password: 'password' };

      const error = new Error('Login error');
      (User.findOne as jest.Mock).mockRejectedValue(error);

      await loginUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error logging in', error });
    });
  });
});
