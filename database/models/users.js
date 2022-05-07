const db = require("../index.js");

module.exports = {
  getAllUsers: () => {
    var sql = `select * from users`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  getUser: async (id) => {
    var sql = `select * from users where user_id = ${id}`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  postUser: (
    name,
    screen_name,
    verified,
    email,
    password_hash,
    profile_image_url_https
  ) => {
    var sql = `insert into users (name, screen_name, verified, email, password_hash, profile_image_url_https) values ('${name}', '${screen_name}', ${verified}, '${email}', '${password_hash}', '${profile_image_url_https}')`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  // FIX ONCE AUTH DONE
  updateUser: (
    id,
    name,
    screen_name,
    verified,
    email,
    password_hash,
    profile_image_url_https
  ) => {
    var sql = `update users set name = '${name}', screen_name = '${screen_name}', verified =  ${verified}, email =  '${email}', password_hash = '${password_hash}', profile_image_url_https = '${profile_image_url_https}' where id = ${id}`;

    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  deleteUser: (id) => {
    var sql = `delete from users where user_id = ${id}`;
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
