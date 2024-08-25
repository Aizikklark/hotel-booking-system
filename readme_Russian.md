<!DOCTYPE html>
<html>
<head>
  <title>Система бронирования отелей - README</title>
</head>
<body>

<h1>Система бронирования отелей</h1>
<p>Добро пожаловать в проект "Система бронирования отелей"! Это RESTful API, созданное с использованием Node.js, TypeScript, Express.js, PostgreSQL и ORM Sequelize. API позволяет пользователям управлять бронированиями отелей, номерами и самими отелями, а также включает аутентификацию и авторизацию пользователей.</p>

<h2>Содержание</h2>
<ul>
  <li><a href="#features">Функциональные возможности</a></li>
  <li><a href="#technologies">Используемые технологии</a></li>
  <li><a href="#getting-started">Начало работы</a></li>
  <li><a href="#setup-and-installation">Установка и настройка</a></li>
  <li><a href="#api-endpoints">Эндпоинты API</a></li>
  <li><a href="#hashing">Инструкция по хешированию пароля и созданию администратора</a></li>
  <li><a href="#usage">Использование</a></li>
  <li><a href="#error-handling">Обработка ошибок</a></li>
</ul>

<h2 id="features">Функциональные возможности</h2>
<ul>
  <li>Регистрация и вход пользователей с аутентификацией через JWT</li>
  <li>CRUD операции для отелей, номеров и бронирований</li>
  <li>Функциональность администратора для управления пользователями, отелями и номерами</li>
  <li>Middleware для аутентификации и обработки ошибок</li>
  <li>Интеграция с базой данных PostgreSQL через ORM Sequelize</li>
</ul>

<h2 id="technologies">Используемые технологии</h2>
<ul>
  <li>Node.js</li>
  <li>TypeScript</li>
  <li>Express.js</li>
  <li>PostgreSQL</li>
  <li>Sequelize ORM</li>
  <li>JWT (JSON Web Tokens)</li>
  <li>Bcrypt для хэширования паролей</li>
  <li>Dotenv для управления переменными окружения</li>
</ul>

<h2 id="getting-started">Начало работы</h2>
<p>Чтобы запустить проект локально, выполните следующие шаги.</p>

<h3 id="setup-and-installation">Установка и настройка</h3>
<ol>
  <li>Клонируйте репозиторий:</li>
  <pre><code>git clone https://github.com/yourusername/hotel-booking-system.git</code></pre>
  
  <li>Перейдите в директорию проекта:</li>
  <pre><code>cd hotel-booking-system</code></pre>
  
  <li>Установите зависимости:</li>
  <pre><code>npm install</code></pre>
  
  <li>Создайте базу данных PostgreSQL и настройте переменные окружения в файле <code>.env</code>:</li>
  <pre><code>
DB_HOST=localhost
DB_PORT=5432
DB_USER=yourusername
DB_PASSWORD=yourpassword
DB_NAME=hotel_booking
JWT_SECRET=your_jwt_secret
PORT=5000
  </code></pre>
  
  <li>Выполните миграции базы данных:</li>
  <pre><code>npx sequelize-cli db:migrate</code></pre>
  
  <li>Запустите сервер разработки:</li>
  <pre><code>npx ts-node src/app.ts</code></pre>
  
  <li>Ваш сервер должен быть запущен по адресу <code>http://localhost:5000</code></li>
</ol>

<h2 id="api-endpoints">Эндпоинты API</h2>
<p>Ниже представлен список доступных API эндпоинтов:</p>

<h3>Аутентификация</h3>
<ul>
  <li><strong>POST</strong> <code>/api/users/register</code> - Регистрация нового пользователя</li>
  <li><strong>POST</strong> <code>/api/users/login</code> - Вход пользователя</li>
</ul>

<h3>Отели</h3>
<ul>
  <li><strong>POST</strong> <code>/api/hotels</code> - Создание нового отеля (только для администратора)</li>
  <li><strong>GET</strong> <code>/api/hotels</code> - Получение всех отелей</li>
  <li><strong>PUT</strong> <code>/api/hotels/:id</code> - Обновление информации об отеле (только для администратора)</li>
  <li><strong>DELETE</strong> <code>/api/hotels/:id</code> - Удаление отеля (только для администратора)</li>
</ul>

<h3>Номера</h3>
<ul>
  <li><strong>POST</strong> <code>/api/rooms</code> - Создание нового номера (только для администратора)</li>
  <li><strong>GET</strong> <code>/api/rooms</code> - Получение всех номеров</li>
  <li><strong>PUT</strong> <code>/api/rooms/:id</code> - Обновление информации о номере (только для администратора)</li>
  <li><strong>DELETE</strong> <code>/api/rooms/:id</code> - Удаление номера (только для администратора)</li>
</ul>

<h3>Бронирования</h3>
<ul>
  <li><strong>POST</strong> <code>/api/bookings</code> - Создание нового бронирования</li>
  <li><strong>GET</strong> <code>/api/bookings</code> - Получение всех бронирований (только для администратора)</li>
  <li><strong>DELETE</strong> <code>/api/bookings/:id</code> - Отмена бронирования</li>
</ul>

<h2 id="hashing">Инструкция по хешированию пароля и созданию администратора</h2>

<h3>Запуск скрипта для хеширования пароля</h3>
<p>Запишите пароль в файл <code>scripts/hashPassword.js</code> и запустите его через Node.js:</p>

<pre><code>node scripts/hashPassword.js</code></pre>

<p>После выполнения скрипта вы увидите захешированный пароль в консоли. Пример:</p>

<pre><code>Захешированный пароль: $2b$10$eG6Z5R/5.sJhKKLz.mQZOOg7A4yIavHYmVlA3fwW4Og7cB2bI/poa</code></pre>

<h3>Используйте захешированный пароль в SQL-запросе</h3>
<p>Теперь вы можете использовать полученный захешированный пароль в вашем SQL-запросе для создания администратора:</p>

<pre><code>INSERT INTO users (username, email, password, "isAdmin", "createdAt", "updatedAt")
VALUES ('admin', 'admin@example.com', '$2b$10$eG6Z5R/5.sJhKKLz.mQZOOg7A4yIavHYmVlA3fwW4Og7cB2bI/poa', true, NOW(), NOW());</code></pre>

<h3>Проверка регистрации администратора</h3>
<p>После выполнения SQL-запроса ваш новый администратор будет добавлен в базу данных с захешированным паролем.</p>

<h2 id="usage">Использование</h2>

<p>Для взаимодействия с API можно использовать инструменты, такие как <a href="https://www.postman.com/">Postman</a> или <a href="https://curl.se/">cURL</a>. Вот несколько примеров запросов:</p>

<h3>Регистрация нового пользователя</h3>
<pre><code>
POST /api/users/register
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword"
}
</code></pre>

<h3>Вход пользователя</h3>
<pre><code>
POST /api/users/login
{
  "email": "john@example.com",
  "password": "securepassword"
}
</code></pre>

<h3>Создание нового отеля (только для администратора)</h3>
<pre><code>
POST /api/hotels
Headers: { Authorization: 'Bearer &lt;token&gt;' }
{
  "name": "Hotel California",
  "location": "California, USA"
}
</code></pre>

<h3>Создание нового номера в отеле (только для администратора)</h3>
<pre><code>
POST /api/rooms
Headers: { Authorization: 'Bearer &lt;token&gt;' }
{
  "hotelId": 1,
  "number": "101",
  "type": "Deluxe",
  "price": 150.0
}
</code></pre>

<h3>Бронирование номера в отеле</h3>
<pre><code>
POST /api/bookings
Headers: { Authorization: 'Bearer &lt;token&gt;' }
{
  "userId": 1,
  "roomId": 101,
  "startDate": "2024-09-01",
  "endDate": "2024-09-05"
}
</code></pre>

<h3>Получение всех отелей</h3>
<pre><code>
GET /api/hotels
</code></pre>

<h2 id="error-handling">Обработка ошибок</h2>
<p>API включает обработку ошибок для различных сценариев, таких как неверный ввод, несанкционированный доступ и ошибки сервера. Используются стандартные коды ответа HTTP для указания на успешность или неудачу выполнения запроса.</p>

<h2>Контакты</h2>
<p>Если у вас есть вопросы или предложения, пожалуйста, свяжитесь со мной по электронной почте: <a href="mailto:ajzikk@gmail.com">ajzikk@gmail.com</a>.</p>

</body>
</html>
