const postController = require("../controller/posts");

const posts_routes = [
  {
    method: "GET",
    url: "/api/posts",
    handler: postController.getAllPosts,
  },
  {
    method: "GET",
    url: "/api/posts/:post_url_id",
    handler: postController.getPost,
  },
  {
    method: "POST",
    url: "/api/posts",
    handler: postController.addPost,
  },
  {
    method: "PUT",
    url: "/api/posts/:post_url_id",
    handler: postController.updatePost,
  },
  {
    method: "DELETE",
    url: "/api/posts/:post_url_id",
    handler: postController.deletePost,
  },
];

module.exports = posts_routes;
