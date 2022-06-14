const fastify = require("fastify")({
  logger: true,
});

// const path = require("path");
// const DistPath = path.join(__dirname, "..", "build");

// fastify.register(require("fastify-static"), {
//   root: DistPath,
// });

// const jose = require("jose"); // JWT validation

fastify.decorate("verifyJWT", function (request, reply, done) {
  console.log(request);
  done(); // pass an error if the authentication fails
});

fastify.get("/test", async (request, reply) => {
  console.log(request);
  return { hello: "world" };
});

//database
const post_routes = require("./routes/posts");
const category_routes = require("./routes/categories");
const picture_routes = require("./routes/pictures");
const routes = [...category_routes, ...post_routes, ...picture_routes];

routes.forEach((route) => {
  fastify.route(route);
});

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
