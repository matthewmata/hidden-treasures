const app = require("fastify")({
  logger: true,
});

// Register routes to handle blog posts
const routes = require("./routes/users");
routes.forEach((route, index) => {
  app.route(route);
});

// Run the server!
app.listen(3000, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});