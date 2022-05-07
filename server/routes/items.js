const itemController = require("../controller/items");

const items_routes = [
  {
    method: "GET",
    url: "/api/items",
    handler: itemController.getAllItems,
  },
  {
    method: "GET",
    url: "/api/items/:item_id",
    handler: itemController.getItem,
  },
  {
    method: "POST",
    url: "/api/items",
    handler: itemController.addItem,
  },
  // {
  //   method: "PUT",
  //   url: "/api/items/:item_id",
  //   handler: itemController.updateItem,
  // },
  // {
  //   method: "DELETE",
  //   url: "/api/items/:item_id",
  //   handler: itemController.deleteItem,
  // },
];

module.exports = items_routes;
