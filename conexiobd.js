var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'AsD21158651!',
  database : 'vetapp'
});

module.exports = connection;
connection.connect();