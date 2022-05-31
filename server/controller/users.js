const models = require("../../database/models/users.js");

// Handlers
const getAllUsers = async (req, reply) => {
  try {
    const users = await models.getAllUsers();
    reply.code(200).send(users);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const getUser = async (req, reply) => {
  const { user_id } = req.params;
  try {
    const user = await models.getUser(user_id);
    reply.code(200).send(user);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const addUser = async (req, reply) => {
  const { email } = req.body;
  try {
    await models.addUser(email);
    reply.code(201).send("Successfully created new user");
  } catch (error) {
    reply.code(400).send(error);
  }
};

const updateUser = async (req, reply) => {
  const { user_id } = req.params;
  const { email } = req.body;
  try {
    await models.updateUser(user_id, email);
    reply.code(201).send("Successfully updated user");
  } catch (error) {
    reply.code(400).send(error);
  }
};

const deleteUser = async (req, reply) => {
  const { user_id } = req.params;
  try {
    await models.deleteUser(user_id);
    reply.code(200).send("Successfully deleted user");
  } catch (error) {
    reply.code(400).send(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
