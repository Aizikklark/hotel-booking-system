import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './docs/SwaggerDocs'; 

const app = express();

const PORT = parseInt(process.env.PORT || '5000', 10);
const HOST = process.env.HOST || 'localhost'; 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, HOST, () => {
    console.log(`Swagger UI доступен на http://${HOST}:${PORT}/api-docs`);
  });    