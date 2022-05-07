const app = require("fastify")({
  logger: true,
});
const fastifyBcrypt = require("fastify-bcrypt-plugin");

// Register routes
// app.decorateRequest('fastifyBcrypt',  fastifyBcrypt)
app.register(fastifyBcrypt, {
  saltWorkFactor: 12,
});

//LOG IN
// const isPasswordCompared = await app.bcrypt.compare(
//   password_hash,
//   hashedPassword
// );

const user_routes = require("./routes/users");
const item_routes = require("./routes/items");
const category_routes = require("./routes/categories");
const routes = [...user_routes, ...category_routes, ...item_routes];

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
