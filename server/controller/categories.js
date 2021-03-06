const models = require("../../database/models/categories.js");

// Handlers
const getAllCategories = async (req, reply) => {
  try {
    const categories = await models.getAllCategories();
    reply.code(200).send(categories);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const getCategory = async (req, reply) => {
  const { category_id } = req.params;
  try {
    const category = await models.getCategory(category_id);
    reply.code(200).send(category);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const addCategory = async (req, reply) => {
  const { name } = req.body;
  try {
    await models.addCategory(name);
    reply.code(201).send("Successfully added new category");
  } catch (error) {
    reply.code(400).send(error);
  }
};

const deleteCategory = async (req, reply) => {
  const { category_id } = req.params;
  try {
    await models.deleteCategory(category_id);
    reply.code(200).send("Successfully deleted category");
  } catch (error) {
    reply.code(400).send(error);
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  addCategory,
  deleteCategory,
};
