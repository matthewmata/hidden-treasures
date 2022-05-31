const app = require("fastify")({
  logger: true,
});

const user_routes = require("./routes/users");
const post_routes = require("./routes/posts");
const category_routes = require("./routes/categories");
const picture_routes = require("./routes/pictures")
const routes = [...user_routes, ...category_routes, ...post_routes, ...picture_routes];

routes.forEach(route => {
  app.route(route);
});

// Run the server!
app.listen(3000, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
