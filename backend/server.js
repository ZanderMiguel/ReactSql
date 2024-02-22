const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./dbConnect");

//Routes
const TasksRouter = require("./Routes/Alltask");

app.use(cors());

//Middleware
app.use("/api/task", TasksRouter);

//Query and Listen to 8081 server
db.query("SELECT * FROM todo_task")
  .then((data) => {
    const mydata = data[0];
    console.log(mydata);
    app.listen(8081, () => {
      console.log(`Listening to PORT 8081`);
    });
  })
  .catch((err) => console.log("Unsuccessful"));
