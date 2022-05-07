const db = require("../index.js");

module.exports = {
  getAllItems: () => {
    var sql = `select * from items`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  getItem: async (id) => {
    var sql = `select * from items where item_id = ${id}`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  addItem: async (
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
    item_image_url_https,
    url,
    category_id,
    user_id
  ) => {
    var sql = `insert into items (title, price, title_city, postal_code, description, make, model, size, condition_description, language, cryptocurrency_ok, delivery_ok, email, show_phone_number, phone_calls_ok, text_sms_ok, phone_number, extension, contact_name, show_address, street, cross_street, city, item_image_url_https, url, category_id, user_id) values ('${title}', '${price}', '${title_city}', '${postal_code}', '${description}', '${make}', '${model}', '${size}', '${condition_description}', '${language}', ${cryptocurrency_ok}, ${delivery_ok}, '${email}', ${show_phone_number}, ${phone_calls_ok}, ${text_sms_ok}, '${phone_number}', '${extension}', '${contact_name}', '${show_address}', '${street}', '${cross_street}', '${city}', '${item_image_url_https}', '${url}', ${category_id}, ${user_id})`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  updateItem: async (
    item_id,
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
    item_image_url_https,
    url
  ) => {
    var sql = `update items set title = '${title}', price = '${price}', title_city = '${title_city}', postal_code = '${postal_code}', description = '${description}', make = '${make}', model = '${model}', size = '${size}', condition_description = '${condition_description}', language = '${language}', cryptocurrency_ok = ${cryptocurrency_ok}, delivery_ok = ${delivery_ok}, email = '${email}', show_phone_number = ${show_phone_number}, phone_calls_ok = ${phone_calls_ok}, text_sms_ok = ${text_sms_ok}, phone_number = '${phone_number}', extension = '${extension}', contact_name = '${contact_name}', show_address = ${show_address}, street = '${street}', cross_street = '${cross_street}', city = '${city}', item_image_url_https = '${item_image_url_https}', url = '${url}' where item_id = ${id}`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  deleteItem: async (id) => {
    var sql = `delete * from items where item_id = ${id}`;
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
