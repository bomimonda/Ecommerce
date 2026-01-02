const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = 3005;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log("JSON Server running on port", PORT);
});

console.log("hello"); // ✅ ye ab chalega
