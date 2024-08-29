const bookingSwaggerOptions = {
    paths: {
      '/api/bookings': {
        post: {
          summary: 'Создание нового бронирования',
          tags: ['Bookings'],
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BookingCreateRequest',
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Бронирование успешно создано',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/BookingResponse',
                  },
                },
              },
            },
            500: {
              description: 'Ошибка при создании бронирования',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Error creating booking',
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
          summary: 'Получение списка всех бронирований',
          tags: ['Bookings'],
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: 'Список всех бронирований',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/BookingResponse',
                    },
                  },
                },
              },
            },
            500: {
              description: 'Ошибка при получении списка бронирований',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Error fetching bookings',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/api/bookings/{id}': {
        delete: {
          summary: 'Отмена бронирования',
          tags: ['Bookings'],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              description: 'ID бронирования для отмены',
              schema: {
                type: 'integer',
                example: 1,
              },
            },
          ],
          responses: {
            200: {
              description: 'Бронирование успешно отменено',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Booking cancelled successfully',
                      },
                    },
                  },
                },
              },
            },
            404: {
              description: 'Бронирование не найдено',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Booking not found',
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: 'Ошибка при отмене бронирования',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Error cancelling booking',
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
        BookingCreateRequest: {
          type: 'object',
          required: ['userId', 'roomId', 'startDate', 'endDate'],
          properties: {
            userId: {
              type: 'integer',
              description: 'ID пользователя, который делает бронирование',
              example: 1,
            },
            roomId: {
              type: 'integer',
              description: 'ID комнаты, которую бронируют',
              example: 101,
            },
            startDate: {
              type: 'string',
              format: 'date-time',
              description: 'Дата начала бронирования',
              example: '2024-09-01T00:00:00.000Z',
            },
            endDate: {
              type: 'string',
              format: 'date-time',
              description: 'Дата окончания бронирования',
              example: '2024-09-10T00:00:00.000Z',
            },
          },
        },
        BookingResponse: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Уникальный идентификатор бронирования',
              example: 1,
            },
            userId: {
              type: 'integer',
              description: 'ID пользователя, который сделал бронирование',
              example: 1,
            },
            roomId: {
              type: 'integer',
              description: 'ID комнаты, которую забронировали',
              example: 101,
            },
            startDate: {
              type: 'string',
              format: 'date-time',
              description: 'Дата начала бронирования',
              example: '2024-09-01T00:00:00.000Z',
            },
            endDate: {
              type: 'string',
              format: 'date-time',
              description: 'Дата окончания бронирования',
              example: '2024-09-10T00:00:00.000Z',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата и время создания записи',
              example: '2024-08-29T10:10:10.000Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата и время последнего обновления записи',
              example: '2024-08-29T12:00:00.000Z',
            },
          },
        },
      },
    },
    tags: [
      {
        name: 'Bookings',
        description: 'Управление бронированиями в системе',
      },
    ],
  };
  
  export default bookingSwaggerOptions;
  