var mysql = require("mysql");

var conexion = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "AsD21158651!",
  database: "vetapp"
});

module.exports = conexion;
