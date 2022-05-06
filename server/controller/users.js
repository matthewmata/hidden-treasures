const models = require("../../database/models/users.js");

// Handlers
const getAllUsers = async (req, reply) => {
  try {
    const users = await models.getAllUsers();
    return users;
  } catch (error) {
    return error;
  }
};

const getUser = async (req, reply) => {
  const { id } = req.params;
  try {
    const user = await models.getUser(id);
    return user;
  } catch (error) {
    return error;
  }
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
  try {
    await models.postUser(
      name,
      screen_name,
      location,
      verified,
      url,
      profile_image_url_https
    );
    return "Posted";
  } catch (error) {
    console.log(error);
  }
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
  try {
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
    return "Updated";
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, reply) => {
  const { id } = req.params;
  try {
    await models.deleteUser(id, (err, data) => {
      reply.send(err || data);
    });
    return "Deleted";
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
