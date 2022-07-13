var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hidden_treasures",
});

// const connection = mysql.createConnection({
//   host: "",
//   user: "",
//   password: "",
//   database: "",
//   port: 
// });

// const tunnelConfig = {
//   host: process.env.DB_SSH_HOST,
//   port: 22,
//   username: process.env.DB_SSH_USER,
//   password: process.env.DB_SSH_PASSWORD,
// };

// const tunnelConfig = {
//   host: process.env.DB_SSH_HOST,
//   port: 22,
//   username: process.env.DB_SSH_USER,
//   password: process.env.DB_SSH_PASSWORD,
// };

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("connected");
  }
});

module.exports = connection;
