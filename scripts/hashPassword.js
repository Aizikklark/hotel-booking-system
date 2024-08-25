const bcrypt = require('bcrypt');

// Пароль, который вы хотите захешировать
const plainPassword = '1234';


// Количество раундов для алгоритма хеширования bcrypt
const saltRounds = 10;

// Хеширование пароля
bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
  if (err) {
    console.error('Ошибка при хешировании пароля:', err);
  } else {
    console.log('Захешированный пароль:', hash);
  }
});
