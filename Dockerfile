# Используем официальный образ Node.js
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы в рабочую директорию
COPY . .

# Копируем файл окружения
# COPY .env .env

# Компилируем TypeScript в JavaScript
RUN npm run clean
RUN npm run build

# Указываем порт, который будет слушать наше приложение
#EXPOSE ${APP_PORT}
EXPOSE 5000
#Явно указываем порт, который будет использоваться

# Запускаем приложение
CMD ["npm", "run", "start:prod"]
