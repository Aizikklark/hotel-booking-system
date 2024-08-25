<h1>Hotel Booking System</h1>
<p>Welcome to the Hotel Booking System project! This is a RESTful API built with Node.js, TypeScript, Express.js, PostgreSQL, and Sequelize ORM. The API allows users to manage hotel bookings, rooms, and hotels. It also includes user authentication and authorization.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#technologies">Technologies Used</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
  <li><a href="#setup-and-installation">Setup and Installation</a></li>
  <li><a href="#api-endpoints">API Endpoints</a></li>
  <li><a href="#hashing">Instructions for Hashing a Password and Creating an Admin</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#error-handling">Error Handling</a></li>
</ul>

<h2 id="features">Features</h2>
<ul>
  <li>User registration and login with JWT authentication</li>
  <li>CRUD operations for hotels, rooms, and bookings</li>
  <li>Admin functionality for managing users, hotels, and rooms</li>
  <li>Middleware for authentication and error handling</li>
  <li>Database integration with PostgreSQL and Sequelize ORM</li>
</ul>

<h2 id="technologies">Technologies Used</h2>
<ul>
  <li>Node.js</li>
  <li>TypeScript</li>
  <li>Express.js</li>
  <li>PostgreSQL</li>
  <li>Sequelize ORM</li>
  <li>JWT (JSON Web Tokens)</li>
  <li>Bcrypt for password hashing</li>
  <li>Dotenv for environment variable management</li>
</ul>

<h2 id="getting-started">Getting Started</h2>
<p>To get a local copy up and running, follow these simple steps.</p>

<h3 id="setup-and-installation">Setup and Installation</h3>
<ol>
  <li>Clone the repository:</li>
  <pre><code>git clone https://github.com/yourusername/hotel-booking-system.git</code></pre>
  
  <li>Navigate to the project directory:</li>
  <pre><code>cd hotel-booking-system</code></pre>
  
  <li>Install dependencies:</li>
  <pre><code>npm install</code></pre>
  
  <li>Create a PostgreSQL database and configure your environment variables in a <code>.env</code> file:</li>
  <pre><code>
DB_HOST=localhost
DB_PORT=5432
DB_USER=yourusername
DB_PASSWORD=yourpassword
DB_NAME=hotel_booking
JWT_SECRET=your_jwt_secret
PORT=5000
  </code></pre>
  
  <li>Run database migrations:</li>
  <pre><code>npx sequelize-cli db:migrate</code></pre>
  
  <li>Start the development server:</li>
  <pre><code>npx ts-node src/app.ts</code></pre>
  
  <li>Your server should now be running on <code>http://localhost:5000</code></li>
</ol>

<h2 id="api-endpoints">API Endpoints</h2>
<p>Below is a list of available API endpoints:</p>

<h3>Authentication</h3>
<ul>
  <li><strong>POST</strong> <code>/api/users/register</code> - Register a new user</li>
  <li><strong>POST</strong> <code>/api/users/login</code> - User login</li>
</ul>

<h3>Hotels</h3>
<ul>
  <li><strong>POST</strong> <code>/api/hotels</code> - Create a new hotel (Admin only)</li>
  <li><strong>GET</strong> <code>/api/hotels</code> - Get all hotels</li>
  <li><strong>PUT</strong> <code>/api/hotels/:id</code> - Update a hotel (Admin only)</li>
  <li><strong>DELETE</strong> <code>/api/hotels/:id</code> - Delete a hotel (Admin only)</li>
</ul>

<h3>Rooms</h3>
<ul>
  <li><strong>POST</strong> <code>/api/rooms</code> - Create a new room (Admin only)</li>
  <li><strong>GET</strong> <code>/api/rooms</code> - Get all rooms</li>
  <li><strong>PUT</strong> <code>/api/rooms/:id</code> - Update a room (Admin only)</li>
  <li><strong>DELETE</strong> <code>/api/rooms/:id</code> - Delete a room (Admin only)</li>
</ul>

<h3>Bookings</h3>
<ul>
  <li><strong>POST</strong> <code>/api/bookings</code> - Create a new booking</li>
  <li><strong>GET</strong> <code>/api/bookings</code> - Get all bookings (Admin only)</li>
  <li><strong>DELETE</strong> <code>/api/bookings/:id</code> - Cancel a booking</li>
</ul>

<h2 id="hashing">Instructions for Hashing a Password and Creating an Admin</h2>

<h3>Running the Script to Hash a Password</h3>
<p>Write the password in the file <code>scripts/hashPassword.js</code> and run it via Node.js:</p>

<pre><code>node scripts/hashPassword.js</code></pre>

<p>After running the script, you will see the hashed password in the console. Example:</p>

<pre><code>Hashed password: $2b$10$eG6Z5R/5.sJhKKLz.mQZOOg7A4yIavHYmVlA3fwW4Og7cB2bI/poa</code></pre>

<h3>Use the Hashed Password in an SQL Query</h3>
<p>Now you can use the hashed password in your SQL query to create an admin:</p>

<pre><code>INSERT INTO users (username, email, password, "isAdmin", "createdAt", "updatedAt")
VALUES ('admin', 'admin@example.com', '$2b$10$eG6Z5R/5.sJhKKLz.mQZOOg7A4yIavHYmVlA3fwW4Og7cB2bI/poa', true, NOW(), NOW());</code></pre>

<h3>Verify Admin Registration</h3>
<p>After executing the SQL query, your new admin will be added to the database with the hashed password.</p>


<h2 id="usage">Usage</h2>
<p>To interact with the API, you can use tools like <a href="https://www.postman.com/">Postman</a> or <a href="https://curl.se/">cURL</a>. Here are some examples of how to make requests:</p>

<h3>Register a new user</h3>
<pre><code>
POST /api/users/register
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword"
}
</code></pre>

<h3>User login</h3>
<pre><code>
POST /api/users/login
{
  "email": "john@example.com",
  "password": "securepassword"
}
</code></pre>

<h3>Create a new hotel (Admin only)</h3>
<pre><code>
POST /api/hotels
Headers: { Authorization: 'Bearer &lt;token&gt;' }
{
  "name": "Hotel California",
  "location": "California, USA"
}
</code></pre>

<h3>Create a new hotel room (Admin only)</h3>
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

<h3>Booking a hotel room</h3>
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

<h3>Get all hotels</h3>
<pre><code>
GET /api/hotels
</code></pre>

<h2 id="error-handling">Error Handling</h2>
<p>The API includes error handling for various scenarios such as invalid input, unauthorized access, and server errors. Standard HTTP response codes are used to indicate the success or failure of an API request.</p>

<h2>Contact</h2>
<p>For any inquiries or questions, please contact me at <a href="mailto:ajzikk@gmail.com">ajzikk@gmail.com</a>.</p>

</body>
</html>
