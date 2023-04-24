const express = require("express");
const controller = require("./userController");
const bodyParser = require("body-parser");

function initServer(port) {
  // use express to make server
  const app = express();

  // allow Express to parse JSON data in the request body
  app.use(express.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  // create user endpoint
  app.post("/user", controller.createUser);

  // get user by id endpoint
  app.get("/user/:id", controller.getUser);

  // get all users endpoint
  app.get("/users", controller.getAllUsers);

  // start server
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}

module.exports = {
  initServer: initServer,
};
