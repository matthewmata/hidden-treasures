const userController = require("../controller/users");

const users_routes = [
  {
    method: "GET",
    url: "/api/users",
    handler: userController.getAllUsers,
  },
  {
    method: "GET",
    url: "/api/users/:id",
    handler: userController.getUser,
  },
  {
    method: "POST",
    url: "/api/users",
    handler: userController.addUser,
  },
  {
    method: "PUT",
    url: "/api/users/:id",
    handler: userController.updateUser,
  },
  {
    method: "DELETE",
    url: "/api/users/:id",
    handler: userController.deleteUser,
  },
];

module.exports = users_routes;