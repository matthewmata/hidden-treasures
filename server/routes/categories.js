const categoryController = require("../controller/categories");

const categories_routes = [
  {
    method: "GET",
    url: "/api/categories",
    handler: categoryController.getAllCategories,
  },
  {
    method: "GET",
    url: "/api/categories/:category_id",
    handler: categoryController.getCategory,
  },
  {
    method: "POST",
    url: "/api/categories",
    handler: categoryController.addCategory,
  },
  {
    method: "DELETE",
    url: "/api/categories/:category_id",
    handler: categoryController.deleteCategory,
  },
];

module.exports = categories_routes;
