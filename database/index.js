var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hidden_treasures",
});

// uncomment for AWS RDS

// var connection = mysql.createConnection({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   port: 3306,
// });

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("connected");
  }
});

module.exports = connection;
