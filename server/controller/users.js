const models = require("../../database/models/users.js");

// Handlers
const getAllUsers = async(req, reply) => {
  await models.getAllUsers((err, data) => {
    reply.send(err || data);
  });
};

const getUser = async (req, reply) => {
  const { id } = req.params;
  await models.getUser(id, (err, data) => {
    reply.send(err || data);
  });
};

const addUser = async (req, reply) => {
  const {
    name,
    screen_name,
    location,
    verified,
    url,
    profile_image_url_https,
  } = req.body;
  await models.postUser(
    name,
    screen_name,
    location,
    verified,
    url,
    profile_image_url_https,
    (err) => {
      if (err) {
        reply.send(err);
      } else {
        reply.send("Successful Post");
      }
    }
  );
};

const updateUser = async (req, reply) => {
  const { id } = req.params;
  const {
    name,
    screen_name,
    location,
    verified,
    url,
    profile_image_url_https,
  } = req.body;
  await models.updateUser(
    id,
    name,
    screen_name,
    location,
    verified,
    url,
    profile_image_url_https,
    (err, data) => {
      reply.send(err || data);
    }
  );
};

const deleteUser = async (req, reply) => {
  const { id } = req.params;
  await models.deleteUser(id, (err, data) => {
    reply.send(err || data);
  });
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
