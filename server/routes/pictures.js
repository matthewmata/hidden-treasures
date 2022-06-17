const pictureController = require("../controller/pictures");

const pictures_routes = [
  // {
  //   method: "GET",
  //   url: "/api/pictures",
  //   handler: pictureController.getAllPictures,
  // },
  {
    method: "GET",
    url: "/api/pictures/:post_url_id",
    handler: pictureController.getPicturesForPost,
  },
  {
    method: "POST",
    url: "/api/pictures",
    handler: pictureController.addPicture,
  },
  {
    method: "DELETE",
    url: "/api/pictures/:picture_id",
    handler: pictureController.deletePicture,
  },
  {
    method: "DELETE",
    url: "/api/pictures/post/:post_url_id",
    handler: pictureController.deletePictureForPost,
  },
];

module.exports = pictures_routes;
