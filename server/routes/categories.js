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
    method: "GET",
    url: "/api/categories/posts/:category_id",
    handler: categoryController.getPostForCategory,
  },
  {
    method: "POST",
    url: "/api/categories",
    handler: categoryController.addCategory,
  },
  {
    method: "PUT",
    url: "/api/categories/:category_id",
    handler: categoryController.updateCategory,
  },
  {
    method: "DELETE",
    url: "/api/categories/:category_id",
    handler: categoryController.deleteCategory,
  },
];

module.exports = categories_routes;
