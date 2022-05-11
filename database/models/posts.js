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
  getPost: (id) => {
    const sql = `select * from posts where post_id = ${id}`;
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
    title,
    price,
    title_city,
    postal_code,
    description,
    make,
    model,
    size,
    condition_description,
    language,
    cryptocurrency_ok,
    delivery_ok,
    email,
    show_phone_number,
    phone_calls_ok,
    text_sms_ok,
    phone_number,
    extension,
    contact_name,
    show_address,
    street,
    cross_street,
    city,
    post_image_url_https,
    url,
    category_id,
    user_id
  ) => {
    const sql = `insert into posts (title, price, title_city, postal_code, description, make, model, size, condition_description, language, cryptocurrency_ok, delivery_ok, email, show_phone_number, phone_calls_ok, text_sms_ok, phone_number, extension, contact_name, show_address, street, cross_street, city, post_image_url_https, url, category_id, user_id) values ('${title}', '${price}', '${title_city}', '${postal_code}', '${description}', '${make}', '${model}', '${size}', '${condition_description}', '${language}', ${cryptocurrency_ok}, ${delivery_ok}, '${email}', ${show_phone_number}, ${phone_calls_ok}, ${text_sms_ok}, '${phone_number}', '${extension}', '${contact_name}', '${show_address}', '${street}', '${cross_street}', '${city}', '${post_image_url_https}', '${url}', ${category_id}, ${user_id})`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  updatePost: (
    id,
    title,
    price,
    title_city,
    postal_code,
    description,
    make,
    model,
    size,
    condition_description,
    language,
    cryptocurrency_ok,
    delivery_ok,
    email,
    show_phone_number,
    phone_calls_ok,
    text_sms_ok,
    phone_number,
    extension,
    contact_name,
    show_address,
    street,
    cross_street,
    city,
    post_image_url_https,
    url
  ) => {
    const sql = `update posts set title = '${title}', price = '${price}', title_city = '${title_city}', postal_code = '${postal_code}', description = '${description}', make = '${make}', model = '${model}', size = '${size}', condition_description = '${condition_description}', language = '${language}', cryptocurrency_ok = ${cryptocurrency_ok}, delivery_ok = ${delivery_ok}, email = '${email}', show_phone_number = ${show_phone_number}, phone_calls_ok = ${phone_calls_ok}, text_sms_ok = ${text_sms_ok}, phone_number = '${phone_number}', extension = '${extension}', contact_name = '${contact_name}', show_address = ${show_address}, street = '${street}', cross_street = '${cross_street}', city = '${city}', post_image_url_https = '${post_image_url_https}', url = '${url}' where post_id = ${id}`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  deletePost: (id) => {
    const sql = `delete from posts where post_id = ${id}`;
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
