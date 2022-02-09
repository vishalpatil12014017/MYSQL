module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  // http://localhost:3535/api/tutorials
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  //http://localhost:3535/api/tutorials?page=0&size=4
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  //http://localhost:3535/api/tutorials/published?page=0&size=1
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  //http://localhost:3535/api/tutorials/4
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  //http://localhost:3535/api/tutorials/1
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  //http://localhost:3535/api/tutorials/1
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  //http://localhost:3535/api/tutorials
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
