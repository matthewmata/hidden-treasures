// Execute this file from the command line by typing:
// node database/seeder/categories.js

const db = require("../index.js");

const categories = [
  "Appliances",
  "Bikes",
  "Boats",
  "Books",
  "Cars & Trucks",
  "Cell Phones",
  "Collectibles",
  "Electronics",
  "Furniture",
  "Jewelry",
  "Motorcycles",
  "Musical Instruments",
  "Toys & Games",
  "Videogames",
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
