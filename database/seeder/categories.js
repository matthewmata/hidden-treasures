// Execute this file from the command line by typing:
// node database/seeder/categories.js

const db = require("../index.js");

const categories = [
  "appliances",
  "bikes",
  "boats",
  "books",
  "cars & trucks",
  "cell phones",
  "collectibles",
  "electronics",
  "furniture",
  "jewelry",
  "motorcycles",
  "musical intruments",
  "toys & games",
  "videogames",
];

const seeder = () => {
  categories.forEach((category) => {
    const sql = `insert into categories (name) values ('${category}')`;
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
