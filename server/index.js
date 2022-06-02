const fastify = require("fastify")({
  logger: true,
});


// const path = require("path");
// const DistPath = path.join(__dirname, "..", "build");

// fastify.register(require("fastify-static"), {
//   root: DistPath,
// });

fastify
  .decorate("verifyJWTandLevel", function (request, reply, done) {
    // your validation logic
    done(); // pass an error if the authentication fails
  })
  .decorate("verifyUserAndPassword", function (request, reply, done) {
    // your validation logic
    done(); // pass an error if the authentication fails
  })
  .register(require("@fastify/auth"))
  .after(() => {
    fastify.route({
      method: "POST",
      url: "/auth-multiple",
      preHandler: fastify.auth([
        fastify.verifyJWTandLevel,
        fastify.verifyUserAndPassword,
      ]),
      handler: (req, reply) => {
        req.log.info("Auth route");
        reply.send({ hello: "world" });
      },
    });
  });


//database
const user_routes = require("./routes/users");
const post_routes = require("./routes/posts");
const category_routes = require("./routes/categories");
const picture_routes = require("./routes/pictures")
const routes = [...user_routes, ...category_routes, ...post_routes, ...picture_routes];

routes.forEach(route => {
  fastify.route(route);
});

// Run the server!
fastify.listen(3000, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
