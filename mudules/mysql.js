var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "labProj"
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log('mysql is connected ...');
  });

  module.exports = conn;