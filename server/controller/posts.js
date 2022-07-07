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

const getPostByPostID = async (req, reply) => {
  const { post_url_id } = req.params;
  try {
    const post = await models.getPostByPostID(post_url_id);
    reply.code(200).send(post);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const getPostsByCategoryName = async (req, reply) => {
  const { category_name } = req.params;
  try {
    const post = await models.getPostsByCategoryName(category_name);
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
      user_id.replaceAll("-", "")
    );
    reply.code(201).send("Successfully created new post");
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
  getPostByPostID,
  getPostsByCategoryName,
  addPost,
  deletePost,
};
