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
  const { post_id } = req.params;
  try {
    const post = await models.getPost(post_id);
    reply.code(200).send(post);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const addPost = async (req, reply) => {
  const {
    title,
    price,
    title_city,
    postal_code,
    description,
    make,
    model,
    size,
    condition_description,
    language,
    cryptocurrency_ok,
    delivery_ok,
    email,
    show_phone_number,
    phone_calls_ok,
    text_sms_ok,
    phone_number,
    extension,
    contact_name,
    show_address,
    street,
    cross_street,
    city,
    post_image_url_https,
    url,
    category_id,
    user_id,
  } = req.body;
  try {
    await models.addPost(
      title,
      price,
      title_city,
      postal_code,
      description,
      make,
      model,
      size,
      condition_description,
      language,
      cryptocurrency_ok,
      delivery_ok,
      email,
      show_phone_number,
      phone_calls_ok,
      text_sms_ok,
      phone_number,
      extension,
      contact_name,
      show_address,
      street,
      cross_street,
      city,
      post_image_url_https,
      url,
      category_id,
      user_id
    );
    reply.code(201).send("Successfully created new post");
  } catch (error) {
    reply.code(400).send(error);
  }
};

const updatePost = async (req, reply) => {
  const { post_id } = req.params;
  const {
    title,
    price,
    title_city,
    postal_code,
    description,
    make,
    model,
    size,
    condition_description,
    language,
    cryptocurrency_ok,
    delivery_ok,
    email,
    show_phone_number,
    phone_calls_ok,
    text_sms_ok,
    phone_number,
    extension,
    contact_name,
    show_address,
    street,
    cross_street,
    city,
    post_image_url_https,
    url,
  } = req.body;
  try {
    await models.updatePost(
      post_id,
      title,
      price,
      title_city,
      postal_code,
      description,
      make,
      model,
      size,
      condition_description,
      language,
      cryptocurrency_ok,
      delivery_ok,
      email,
      show_phone_number,
      phone_calls_ok,
      text_sms_ok,
      phone_number,
      extension,
      contact_name,
      show_address,
      street,
      cross_street,
      city,
      post_image_url_https,
      url
    );
    reply.code(201).send("Successfully updated post");
  } catch (error) {
    reply.code(400).send(error);
  }
};

const deletePost = async (req, reply) => {
  const { post_id } = req.params;
  try {
    await models.deletePost(post_id);
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
