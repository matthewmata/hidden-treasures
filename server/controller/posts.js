const models = require("../../database/models/posts.js");

// Handlers
const getAllPosts = async (req, reply) => {
  try {
    const posts = await models.getAllPosts();
    reply.code(200).send(posts);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const getPost = async (req, reply) => {
  const { post_url_id } = req.params;
  try {
    const post = await models.getPost(post_url_id);
    reply.code(200).send(post);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const addPost = async (req, reply) => {
  const {
    post_url_id,
    title,
    price,
    city,
    postal_code,
    description,
    make,
    model,
    size,
    condition_description,
    contact_name,
    email,
    phone_number,
    category_id,
    user_id,
  } = req.body;
  try {
    await models.addPost(
      post_url_id,
      title,
      price,
      city,
      postal_code,
      description,
      make,
      model,
      size,
      condition_description,
      contact_name,
      email,
      phone_number,
      category_id,
      user_id.replaceAll('-', '')
    );
    reply.code(201).send("Successfully created new post");
  } catch (error) {
    reply.code(400).send(error);
  }
};

const updatePost = async (req, reply) => {
  const { post_url_id } = req.params;
  const {
    title,
    price,
    city,
    postal_code,
    description,
    make,
    model,
    size,
    condition_description,
    contact_name,
    email,
    phone_number,
  } = req.body;
  try {
    await models.updatePost(
      post_url_id,
      title,
      price,
      city,
      postal_code,
      description,
      make,
      model,
      size,
      condition_description,
      contact_name,
      email,
      phone_number,
    );
    reply.code(201).send("Successfully updated post");
  } catch (error) {
    reply.code(400).send(error);
  }
};

const deletePost = async (req, reply) => {
  const { post_url_id } = req.params;
  try {
    await models.deletePost(post_url_id);
    reply.code(200).send("Successfully deleted post");
  } catch (error) {
    reply.code(400).send(error);
  }
};

module.exports = {
  getAllPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
};
