const fastify = require("fastify")();


fastify.register(require("@fastify/cors"), (instance) => {
  return (req, callback) => {
    const corsOptions = {
      origin: true,
    };

    // do not include CORS headers for requests from localhost
    if (/^localhost$/m.test(req.headers.origin)) {
      corsOptions.origin = false;
    }

    // callback expects two parameters: error and options
    callback(null, corsOptions);
  };
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
