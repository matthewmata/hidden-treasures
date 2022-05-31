// Execute this file from the command line by typing:
// node database/seeder/users.js

const db = require("../index.js");

const emails = ["a@gmail.com", "b@gmail.com", "c@gmail.com"];

const seeder = () => {
  emails.forEach((email) => {
    const sql = `insert into users (email) values ('${email}')`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  });
};

seeder();
