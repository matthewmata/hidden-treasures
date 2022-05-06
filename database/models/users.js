const db = require("../index.js");

module.exports = {
  getAllUsers: (cb) => {
    var sql = `select * from users`;
    db.query(sql, (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  },
  getUser: (id, cb) => {
    var sql = `select * from users where id = ${id}`;
    db.query(sql, (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  },
  postUser: (
    name,
    screen_name,
    location,
    verified,
    url,
    profile_image_url_https,
    cb
  ) => {
    var sql = `insert into users (name, screen_name, location, verified, url, profile_image_url_https)
               values ('${name}', '${screen_name}', '${location}', ${verified}, '${url}', '${profile_image_url_https}')`;

    db.query(sql, (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  },
  updateUser: (
    id,
    name,
    screen_name,
    location,
    verified,
    url,
    profile_image_url_https,
    cb
  ) => {
    var sql = `update users set name = '${name}', screen_name = '${screen_name}', location = '${location}', verified =  ${verified}, url =  '${url}', profile_image_url_https =  '${profile_image_url_https}' where id = ${id}`;

    db.query(sql, (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  },
  deleteUser: (id, cb) => {
    var sql = `delete from users where id = ${id}`;
    db.query(sql, (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  },
};
