const express = require("express");
const routes = express.Router();

const { getAllTask } = require("../Controller/taskController");

routes.get("/", getAllTask);
routes.post("/addtask");

routes.module.exports = routes;
