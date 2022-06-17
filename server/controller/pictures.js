const models = require("../../database/models/pictures.js");

// Handlers
const getAllPictures = async (req, reply) => {
  try {
    const pictures = await models.getAllPictures();
    reply.code(200).send(pictures);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const getPicturesForPost = async (req, reply) => {
  const { post_url_id } = req.params;
  try {
    const pictures = await models.getPicturesForPost(post_url_id);
    reply.code(200).send(pictures);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const addPicture = async (req, reply) => {
  const { post_url_id, picture_url } = req.body;
  try {
    await models.addPicture(post_url_id, picture_url);
    reply.code(201).send("Successfully created new picture");
  } catch (error) {
    reply.code(400).send(error);
  }
};

const deletePicture = async (req, reply) => {
  const { picture_id } = req.params;
  try {
    await models.deletePicture(picture_id);
    reply.code(200).send("Successfully deleted picture");
  } catch (error) {
    reply.code(400).send(error);
  }
};

const deletePictureForPost = async (req, reply) => {
  const { post_url_id } = req.params;
  try {
    await models.deletePictureForPost(post_url_id);
    reply.code(200).send("Successfully deleted pictures");
  } catch (error) {
    reply.code(400).send(error);
  }
};

module.exports = {
  getAllPictures,
  getPicturesForPost,
  addPicture,
  deletePicture,
  deletePictureForPost
};


