const express = require("express");
const routes = express.Router();

const {
  getAllTask,
  Addtask,
  readTask,
  updateTask,
  deleteTask,
} = require("../Controller/taskController");

routes.get("/", getAllTask);
routes.post("/addtask", Addtask);
routes.get("/read/:id", readTask);
routes.put("/update/:id", updateTask);
routes.delete("/delete/:id", deleteTask);

module.exports = routes;
