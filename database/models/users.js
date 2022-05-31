const db = require("../index.js");

module.exports = {
  getAllUsers: () => {
    const sql = `select * from users`;
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
    const sql = `select * from users where user_id = ${id}`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  addUser: (
    email,
  ) => {
    const sql = `insert into users (email) values ('${email}')`;
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
    email,
  ) => {
    const sql = `update users set email = '${email}' where user_id = ${id}`;

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
    const sql = `delete from users where user_id = ${id}`;
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
