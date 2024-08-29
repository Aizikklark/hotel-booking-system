import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import userRoutes from './routes/userRoutes';
import hotelRoutes from './routes/hotelRoutes';
import roomRoutes from './routes/roomRoutes';
import bookingRoutes from './routes/bookingRoutes';
import sequelize from './config/database';
import swaggerDocs from './docs/SwaggerDocs'; 


dotenv.config();

const app = express();

const PORT = parseInt(process.env.PORT || '5000', 10);
const HOST = process.env.HOST || 'localhost'; 



// Middleware для Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Middlewares
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// Функция для запуска сервера и синхронизации базы данных
const startServer = async () => {
  try {
    // Синхронизация базы данных
    await sequelize.sync();
    //await sequelize.sync({ force: true }); // Внимание: это удалит все существующие таблицы и пересоздаст их
    console.log('Database synchronized successfully.');

    // Запуск сервера после успешной синхронизации
    app.listen(PORT, HOST, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`);
      console.log(`Swagger UI доступен на http://${HOST}:${PORT}/api-docs`);
    });    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Запуск функции
startServer();
