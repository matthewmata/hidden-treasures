// Execute this file from the command line by typing:
// node database/seeder/items.js

// NOT COMPLETE

const db = require("../index.js");

const cities = [
  {
    city: "New York",
    postal_code: "13128",
  },
  {
    city: "Los Angeles",
    postal_code: "90810",
  },
  {
    city: "Chicago",
    postal_code: "67643",
  },
  {
    city: "San Francisco",
    postal_code: "94024",
  },
  {
    city: "Boston",
    postal_code: "02169",
  },
  {
    city: "Las Vegas",
    postal_code: "88941",
  },
  {
    city: "Miami",
    postal_code: "33653",
  },
  {
    city: "New Orleans",
    postal_code: "70864",
  },
  {
    city: "Seattle",
    postal_code: "98150",
  },
  {
    city: "San Diego",
    postal_code: "",
  },
  {
    city: "Orlando",
    postal_code: "32708",
  },
];

const items = [

]

const prices = {
    cheap: [10, 15, 20, 25,30, 35, 40, 45, 50, 55,60, 65,70, 75, 80, 85, 90, 95, 100],
    moderate: [120, 155, 185, 200, 225, 250, 270, 285, 300, 325, 340, 355, 380, 400, 425, 465, 470, 480, 490 ],
    expensive: [10000, 15999, 19999, 21300, 25000, 27999, 29000, 30000, 32000, 35000, 37399] 
}

var a = {
  "title": "hockey stick",
  "price": "12.00",
  "city": "Carson",
  "postal_code": "90810",
  "description": "its cool",
  "make": "stick1",
  "model": "hard stick",
  "size": "L",
  "condition_description": "a",
  "contact_name": "s",
  "email": "g@gmail.com",
  "phone_number": "123-123-1231",
  "category_id": 1,
  "user_id": 1,
}

// const seeder = () => {
//   categories.forEach((category) => {
//     const sql = `insert into categories (name) values ('${category}')`;
//     return new Promise((resolve, reject) => {
//       db.query(sql, (error, results) => {
//         if (error) {
//           return reject(error);
//         }
//         return resolve(results);
//       });
//     });
//   });
// };

// seeder();
