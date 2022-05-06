var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sellme",
});

connection.connect((err) => {
  if (err) console.error(err);
});

module.exports = connection;
