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
    var sql = `select * from users where id = ${id}`;
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
    location,
    verified,
    url,
    profile_image_url_https
  ) => {
    var sql = `insert into users (name, screen_name, location, verified, url, profile_image_url_https) values ('${name}', '${screen_name}', '${location}', ${verified}, '${url}', '${profile_image_url_https}')`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  updateUser: (
    id,
    name,
    screen_name,
    location,
    verified,
    url,
    profile_image_url_https
  ) => {
    var sql = `update users set name = '${name}', screen_name = '${screen_name}', location = '${location}', verified =  ${verified}, url =  '${url}', profile_image_url_https =  '${profile_image_url_https}' where id = ${id}`;

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
    var sql = `delete from users where id = ${id}`;
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
