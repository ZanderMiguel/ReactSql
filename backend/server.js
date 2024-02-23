const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./dbConnect");

//Routes
const TasksRouter = require("./Routes/Alltask");

app.use(cors());
app.use(express.json());

//Middleware
app.use("/api/task", TasksRouter);

//Query test and Listen to 8081 server
db.query("SELECT * FROM todo_task")
  .then(() => app.listen("8081", () => console.log("success")))
  .catch((err) => console.log("Unsuccessful"));
