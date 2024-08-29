const userSwaggerOptions = {
    paths: {
      '/api/users/register': {
        post: {
          summary: 'Регистрация нового пользователя',
          tags: ['Users'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UserRegisterRequest',
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Пользователь успешно зарегистрирован',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'User registered successfully',
                      },
                      user: {
                        $ref: '#/components/schemas/UserResponse',
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: 'Ошибка при регистрации пользователя',
            },
          },
        },
      },
      '/api/users/login': {
        post: {
          summary: 'Аутентификация пользователя',
          tags: ['Users'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/LoginRequest',
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Успешный вход',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/LoginResponse',
                  },
                },
              },
            },
            401: {
              description: 'Неверные учетные данные',
            },
            404: {
              description: 'Пользователь не найден',
            },
            500: {
              description: 'Ошибка при входе пользователя',
            },
          },
        },
      },
    },
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Уникальный идентификатор пользователя',
              example: 1,
            },
            username: {
              type: 'string',
              description: 'Имя пользователя',
              example: 'johndoe',
            },
            email: {
              type: 'string',
              description: 'Email пользователя',
              example: 'johndoe@example.com',
            },
            isAdmin: {
              type: 'boolean',
              description: 'Является ли пользователь администратором',
              example: false,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата создания пользователя',
              example: '2023-08-29T10:10:10.000Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата последнего обновления пользователя',
              example: '2023-08-29T12:00:00.000Z',
            },
          },
        },
        UserRegisterRequest: {
          type: 'object',
          required: ['username', 'email', 'password'],
          properties: {
            username: {
              type: 'string',
              description: 'Имя пользователя',
              example: 'johndoe',
            },
            email: {
              type: 'string',
              description: 'Email пользователя',
              example: 'johndoe@example.com',
            },
            password: {
              type: 'string',
              description: 'Пароль пользователя',
              example: 'password123',
            },
          },
        },
        UserResponse: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Уникальный идентификатор пользователя',
              example: 1,
            },
            username: {
              type: 'string',
              description: 'Имя пользователя',
              example: 'johndoe',
            },
            email: {
              type: 'string',
              description: 'Email пользователя',
              example: 'johndoe@example.com',
            },
            isAdmin: {
              type: 'boolean',
              description: 'Флаг, указывающий, является ли пользователь администратором',
              example: false,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата и время создания пользователя',
              example: '2023-08-29T10:10:10.000Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата и время последнего обновления пользователя',
              example: '2023-08-29T12:00:00.000Z',
            },
          },
        },
        LoginRequest: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: {
              type: 'string',
              description: 'Email пользователя',
              example: 'johndoe@example.com',
            },
            password: {
              type: 'string',
              description: 'Пароль пользователя',
              example: 'password123',
            },
          },
        },
        LoginResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Login successful',
            },
            token: {
              type: 'string',
              description: 'JWT токен для доступа к защищенным маршрутам',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
          },
        },
      },
    },
    tags: [
      {
        name: 'Users',
        description: 'Управление пользователями',
      },
    ],
  };
  
  export default userSwaggerOptions;
  