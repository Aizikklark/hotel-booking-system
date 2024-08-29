import dotenv from 'dotenv';
dotenv.config();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;

const swaggerConfig = {
  openapi: '3.0.0',
  info: {
    title: 'Hotel Booking System API',
    version: '1.0.0',
    description: 'Документация API для системы бронирования отелей',
  },
  servers: [
    {
      url: `http://${HOST}:${PORT}`,
    },
  ],
};

export default swaggerConfig;
