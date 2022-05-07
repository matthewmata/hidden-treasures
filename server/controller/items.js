const models = require("../../database/models/items.js");

// Handlers
const getAllItems = async (req, reply) => {
  try {
    const items = await models.getAllItems();
    reply.code(200).send(items);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const getItem = async (req, reply) => {
  try {
    const item = await models.getItem();
    reply.code(200).send(item);
  } catch (error) {
    reply.code(400).send(error);
  }
};

const addItem = async (req, reply) => {
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
    item_image_url_https,
    url,
    category_id,
    user_id,
  } = req.body;
  try {
    await models.addItem(
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
      item_image_url_https,
      url,
      category_id,
      user_id
    );
    reply.code(201).send("Successfully created new item");
  } catch (error) {
    reply.code(400).send(error);
  }
};

module.exports = {
  getAllItems,
  getItem,
  addItem,
};
