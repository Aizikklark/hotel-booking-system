-- Создаём таблицы в Postgres:

CREATE TABLE users (
  id SERIAL PRIMARY KEY,         -- Автоматическое увеличение значения и первичный ключ
  username VARCHAR(255) NOT NULL, -- Строка (максимальная длина 255 символов), не может быть NULL
  email VARCHAR(255) NOT NULL UNIQUE, -- Строка (максимальная длина 255 символов), не может быть NULL, уникальное значение
  password VARCHAR(255) NOT NULL, -- Строка (максимальная длина 255 символов), не может быть NULL
  isAdmin BOOLEAN DEFAULT false   -- Логический тип, по умолчанию false
);


CREATE TABLE hotels (
  id SERIAL PRIMARY KEY,           -- Автоматическое увеличение значения и первичный ключ
  name VARCHAR(255) NOT NULL,      -- Строка (максимальная длина 255 символов), не может быть NULL
  location VARCHAR(255) NOT NULL   -- Строка (максимальная длина 255 символов), не может быть NULL
);


CREATE TABLE rooms (
  id SERIAL PRIMARY KEY,           -- Автоматическое увеличение значения и первичный ключ
  hotelId INTEGER NOT NULL,        -- Целое число, не может быть NULL
  number VARCHAR(255) NOT NULL,    -- Строка (максимальная длина 255 символов), не может быть NULL
  type VARCHAR(255) NOT NULL,      -- Строка (максимальная длина 255 символов), не может быть NULL
  price FLOAT NOT NULL             -- Число с плавающей точкой, не может быть NULL
);


CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,         -- Автоматическое увеличение значения и первичный ключ
  userId INTEGER NOT NULL,       -- Целое число, не может быть NULL
  roomId INTEGER NOT NULL,       -- Целое число, не может быть NULL
  startDate DATE NOT NULL,       -- Дата начала бронирования, не может быть NULL
  endDate DATE NOT NULL          -- Дата окончания бронирования, не может быть NULL
);


-- Добавляем администратора с помощью SQL-запроса вместе с захешированным паролем