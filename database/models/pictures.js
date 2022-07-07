const db = require("../index.js");

module.exports = {
  getAllPictures: () => {
    const sql = `select * from pictures`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  getPicturesForPost: (post_url_id) => {
    const sql = `select * from pictures where post_url_id = '${post_url_id}'`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  getPictureForPreview: (post_url_id) => {
    const sql = `select * from pictures where post_url_id = '${post_url_id}' limit 1`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  addPicture: (post_url_id, picture_url) => {
    const sql = `insert into pictures (picture_url, post_url_id) values ('${picture_url}', '${post_url_id}')`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  deletePictureForPost: (id) => {
    const sql = `delete from pictures where post_url_id = ${id}`;
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
