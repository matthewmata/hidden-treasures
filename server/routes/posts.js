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
    handler: postController.getPostByPostID,
  },
  {
    method: "GET",
    url: "/api/posts/category/:category_name",
    handler: postController.getPostsByCategoryName,
  },
  {
    method: "POST",
    url: "/api/posts",
    handler: postController.addPost,
  },
  {
    method: "DELETE",
    url: "/api/posts/:post_url_id",
    handler: postController.deletePost,
  },
];

module.exports = posts_routes;
