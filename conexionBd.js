var mysql = require('mysql');

var conexion= mysql.createConnection({

    host:'localhost',
    port:'3306',
    user:'root',
    database:'vetapp'

});

module.exports=conexion; 