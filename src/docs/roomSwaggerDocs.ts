const roomSwaggerOptions = {
    tags: [
      {
        name: 'Rooms',
        description: 'Управление комнатами в отелях',
      },
    ],
    paths: {
      '/api/rooms': {
        post: {
          summary: 'Создание новой комнаты',
          tags: ['Rooms'],
          security: [{ bearerAuth: [] }], // Требуется аутентификация
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    hotelId: {
                      type: 'integer',
                      description: 'ID отеля',
                      example: 1,
                    },
                    number: {
                      type: 'string',
                      description: 'Номер комнаты',
                      example: '101',
                    },
                    type: {
                      type: 'string',
                      description: 'Тип комнаты',
                      example: 'standard',
                    },
                    price: {
                      type: 'number',
                      description: 'Цена за ночь',
                      example: 100,
                    },
                  },
                  required: ['hotelId', 'number', 'type', 'price'],
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Комната успешно создана',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Room',
                  },
                },
              },
            },
            500: {
              description: 'Ошибка при создании комнаты',
            },
          },
        },
        get: {
          summary: 'Получение списка всех комнат',
          tags: ['Rooms'],
          responses: {
            200: {
              description: 'Список всех комнат',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Room',
                    },
                  },
                },
              },
            },
            500: {
              description: 'Ошибка при получении списка комнат',
            },
          },
        },
      },
      '/api/rooms/{id}': {
        put: {
          summary: 'Обновление информации о комнате',
          tags: ['Rooms'],
          security: [{ bearerAuth: [] }], // Требуется аутентификация
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              description: 'ID комнаты для обновления',
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
                  type: 'object',
                  properties: {
                    number: {
                      type: 'string',
                      description: 'Номер комнаты',
                      example: '101',
                    },
                    type: {
                      type: 'string',
                      description: 'Тип комнаты',
                      example: 'standard',
                    },
                    price: {
                      type: 'number',
                      description: 'Цена за ночь',
                      example: 100,
                    },
                  },
                  required: ['number', 'type', 'price'],
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Комната успешно обновлена',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Room',
                  },
                },
              },
            },
            404: {
              description: 'Комната не найдена',
            },
            500: {
              description: 'Ошибка при обновлении комнаты',
            },
          },
        },
        delete: {
          summary: 'Удаление комнаты',
          tags: ['Rooms'],
          security: [{ bearerAuth: [] }], // Требуется аутентификация
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              description: 'ID комнаты для удаления',
              schema: {
                type: 'integer',
                example: 1,
              },
            },
          ],
          responses: {
            200: {
              description: 'Комната успешно удалена',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Room deleted successfully',
                      },
                    },
                  },
                },
              },
            },
            404: {
              description: 'Комната не найдена',
            },
            500: {
              description: 'Ошибка при удалении комнаты',
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Room: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Уникальный идентификатор комнаты',
              example: 1,
            },
            hotelId: {
              type: 'integer',
              description: 'ID отеля, к которому принадлежит комната',
              example: 1,
            },
            number: {
              type: 'string',
              description: 'Номер комнаты',
              example: '101',
            },
            type: {
              type: 'string',
              description: 'Тип комнаты (например, standard, deluxe)',
              example: 'standard',
            },
            price: {
              type: 'number',
              description: 'Цена за ночь',
              example: 100,
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
        RoomCreateRequest: {
          type: 'object',
          required: ['hotelId', 'number', 'type', 'price'],
          properties: {
            hotelId: {
              type: 'integer',
              description: 'ID отеля',
              example: 1,
            },
            number: {
              type: 'string',
              description: 'Номер комнаты',
              example: '101',
            },
            type: {
              type: 'string',
              description: 'Тип комнаты',
              example: 'standard',
            },
            price: {
              type: 'number',
              description: 'Цена за ночь',
              example: 100,
            },
          },
        },
        RoomUpdateRequest: {
          type: 'object',
          required: ['number', 'type', 'price'],
          properties: {
            number: {
              type: 'string',
              description: 'Номер комнаты',
              example: '101',
            },
            type: {
              type: 'string',
              description: 'Тип комнаты',
              example: 'standard',
            },
            price: {
              type: 'number',
              description: 'Цена за ночь',
              example: 100,
            },
          },
        },
        RoomResponse: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Уникальный идентификатор комнаты',
              example: 1,
            },
            hotelId: {
              type: 'integer',
              description: 'ID отеля, к которому принадлежит комната',
              example: 1,
            },
            number: {
              type: 'string',
              description: 'Номер комнаты',
              example: '101',
            },
            type: {
              type: 'string',
              description: 'Тип комнаты',
              example: 'standard',
            },
            price: {
              type: 'number',
              description: 'Цена за ночь',
              example: 100,
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
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  };
  
  export default roomSwaggerOptions;
  