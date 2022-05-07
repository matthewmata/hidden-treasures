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
  const { id } = req.params;
  try {
    const user = await models.getUser(id);
    reply.code(200).send(user);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const addUser = async (req, reply) => {
  const {
    name,
    screen_name,
    verified,
    email,
    password_hash,
    profile_image_url_https,
  } = req.body;
  try {
    const hashedPassword = await req.bcrypt.hash(password_hash);
    await models.postUser(
      name,
      screen_name,
      verified,
      email,
      hashedPassword,
      profile_image_url_https
    );
    reply.code(201).send("Successfully created new user");
  } catch (error) {
    reply.code(400).send(error);
  }
};

// NEED TO FIX ONCE AUTH IS DONE
const updateUser = async (req, reply) => {
  const { id } = req.params;
  const {
    name,
    screen_name,
    verified,
    email,
    password_hash,
    profile_image_url_https,
  } = req.body;
  try {
    const hashedPassword = await req.bcrypt.hash(password_hash);
    const isPasswordCompared = await app.bcrypt.compare(
      password_hash,
      hashedPassword
    );
    await models.updateUser(
      id,
      name,
      screen_name,
      verified,
      email,
      password_hash,
      profile_image_url_https
    );
    reply.code(201).send("Successfully created new user");
  } catch (error) {
    reply.code(400).send(error);
  }
};

const deleteUser = async (req, reply) => {
  const { id } = req.params;
  try {
    await models.deleteUser(id);
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
