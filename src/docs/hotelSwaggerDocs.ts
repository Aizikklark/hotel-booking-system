const hotelSwaggerOptions = {
  paths: {
    '/api/hotels': {
      post: {
        summary: 'Создание нового отеля',
        tags: ['Hotels'],
        security: [{ bearerAuth: [] }], // Требуется токен
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/HotelCreateRequest',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Отель успешно создан',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/HotelResponse',
                },
              },
            },
          },
          401: {
            description: 'Неавторизован',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Unauthorized',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Ошибка при создании отеля',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Error creating hotel',
                    },
                    error: {
                      type: 'string',
                      example: 'Internal Server Error',
                    },
                  },
                },
              },
            },
          },
        },
      },
      get: {
        summary: 'Получение списка всех отелей',
        tags: ['Hotels'],
        responses: {
          200: {
            description: 'Список всех отелей',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/HotelResponse',
                  },
                },
              },
            },
          },
          500: {
            description: 'Ошибка при получении списка отелей',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Error fetching hotels',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/hotels/{id}': {
      put: {
        summary: 'Обновление информации об отеле',
        tags: ['Hotels'],
        security: [{ bearerAuth: [] }], // Требуется токен
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID отеля для обновления',
            schema: {
              type: 'integer',
              example: 1,
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/HotelUpdateRequest',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Информация об отеле успешно обновлена',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/HotelResponse',
                },
              },
            },
          },
          401: {
            description: 'Неавторизован',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Unauthorized',
                    },
                  },
                },
              },
            },
          },
          404: {
            description: 'Отель не найден',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Hotel not found',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Ошибка при обновлении информации об отеле',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Error updating hotel',
                    },
                  },
                },
              },
            },
          },
        },
      },
      delete: {
        summary: 'Удаление отеля',
        tags: ['Hotels'],
        security: [{ bearerAuth: [] }], // Требуется токен
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID отеля для удаления',
            schema: {
              type: 'integer',
              example: 1,
            },
          },
        ],
        responses: {
          200: {
            description: 'Отель успешно удален',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Hotel deleted successfully',
                    },
                  },
                },
              },
            },
          },
          401: {
            description: 'Неавторизован',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Unauthorized',
                    },
                  },
                },
              },
            },
          },
          404: {
            description: 'Отель не найден',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Hotel not found',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Ошибка при удалении отеля',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Error deleting hotel',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  

    components: {
      schemas: {
        Hotel: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Уникальный идентификатор отеля',
              example: 1,
            },
            name: {
              type: 'string',
              description: 'Название отеля',
              example: 'Hotel California',
            },
            location: {
              type: 'string',
              description: 'Местоположение отеля',
              example: 'Los Angeles',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата и время создания записи',
              example: '2023-08-29T10:10:10.000Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата и время последнего обновления записи',
              example: '2023-08-29T12:00:00.000Z',
            },
          },
        },
        HotelCreateRequest: {
          type: 'object',
          required: ['name', 'location'],
          properties: {
            name: {
              type: 'string',
              description: 'Название отеля',
              example: 'Hotel California',
            },
            location: {
              type: 'string',
              description: 'Местоположение отеля',
              example: 'Los Angeles',
            },
          },
        },
        HotelUpdateRequest: {
          type: 'object',
          required: ['name', 'location'],
          properties: {
            name: {
              type: 'string',
              description: 'Название отеля',
              example: 'Hotel California',
            },
            location: {
              type: 'string',
              description: 'Местоположение отеля',
              example: 'Los Angeles',
            },
          },
        },
        HotelResponse: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Уникальный идентификатор отеля',
              example: 1,
            },
            name: {
              type: 'string',
              description: 'Название отеля',
              example: 'Hotel California',
            },
            location: {
              type: 'string',
              description: 'Местоположение отеля',
              example: 'Los Angeles',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата и время создания записи',
              example: '2023-08-29T10:10:10.000Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата и время последнего обновления записи',
              example: '2023-08-29T12:00:00.000Z',
            },
          },
        },
      },
    },
    tags: [
      {
        name: 'Hotels',
        description: 'Управление отелями в системе',
      },
    ],
  };
  
  export default hotelSwaggerOptions;
  