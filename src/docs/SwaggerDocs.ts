import swaggerJsDoc from 'swagger-jsdoc';
import swaggerConfig from './swaggerConfig';
import userSwaggerOptions from './userSwaggerDocs';
import roomSwaggerOptions from './roomSwaggerDocs';
import hotelSwaggerOptions from './hotelSwaggerDocs';
import bookingSwaggerOptions from './bookingSwaggerDocs';

// Объединяем все части конфигурации Swagger
const swaggerOptions = {
  definition: {
    ...swaggerConfig, // Основные метаданные API
    components: {
      schemas: {
        ...userSwaggerOptions.components.schemas,
        ...hotelSwaggerOptions.components.schemas,
        ...roomSwaggerOptions.components.schemas,
        ...bookingSwaggerOptions.components.schemas,
      },
      securitySchemes: {
        ...roomSwaggerOptions.components.securitySchemes,
      },
    },
    paths: {
      ...userSwaggerOptions.paths,
      ...hotelSwaggerOptions.paths,
      ...roomSwaggerOptions.paths,
      ...bookingSwaggerOptions.paths,
    },
    tags: [
      ...userSwaggerOptions.tags,
      ...hotelSwaggerOptions.tags,
      ...roomSwaggerOptions.tags,
      ...bookingSwaggerOptions.tags,
    ],
  },
  apis: [], // Здесь можно указать пути к файлам с JSDoc комментариями, если используете
};

// Создание спецификации Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
