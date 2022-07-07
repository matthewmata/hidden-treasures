const db = require("../index.js");

module.exports = {
  getAllPosts: () => {
    const sql = `select * from posts`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  getPostByPostID: (post_url_id) => {
    const sql = `select * from posts where post_url_id = '${post_url_id}'`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  getPostsByCategoryName: (category_name) => {
    const sql = `select * from posts P inner join categories C on C.name ='${category_name}' and P.category_id = C.category_id`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  addPost: (
    post_url_id,
    title,
    price,
    city,
    postal_code,
    description,
    make,
    model,
    size,
    condition_description,
    contact_name,
    email,
    phone_number,
    category_id,
    user_id
  ) => {
    const sqlValues = [
      post_url_id,
      title,
      price,
      city,
      postal_code,
      description,
      make,
      model,
      size,
      condition_description,
      contact_name,
      email,
      phone_number,
      category_id,
      user_id,
    ];
    const sqlKeys = [
      "post_url_id",
      "title",
      "price",
      "city",
      "postal_code",
      "description",
      "make",
      "model",
      "size",
      "condition_description",
      "contact_name",
      "email",
      "phone_number",
      "category_id",
      "user_id",
    ];

    let sql = "insert into posts (";

    sqlKeys.forEach((el, i, arr) => {
      if (sqlValues[i] !== undefined) {
        sql += el;
      }
      if (sqlValues[i] !== undefined && arr.length - 1 !== i) {
        sql += ",";
      }
    });

    sql += ") values (";

    sqlValues.forEach((el, i, arr) => {
      if (el !== undefined && sqlKeys[i] !== "category_id") {
        sql += `'${el}'`;
      }
      if (el !== undefined && sqlKeys[i] === "category_id") {
        sql += `${el}`;
      }
      if (el !== undefined && arr.length - 1 !== i) {
        sql += ",";
      }
    });

    sql += ")";

    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  deletePost: (post_url_id) => {
    const sql = `delete from posts where post_url_id = ${post_url_id}`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
};
