const db = require("../dbConnect");

const getAllTask = async (req, res) => {
  try {
    const Tasks = await db.query("SELECT * FROM todo_task");
    res.json(Tasks[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

const Addtask = async (req, res) => {
  try {
    const sql = "INSERT INTO todo_task (`Author`, `Content`) VALUES (?)";
    const values = [req.body.author, req.body.content];
    const addtasks = await db.query(sql, [values], (err, res) => {
      if (err) return console.log(err);
      return console.log(res);
    });

    res.json(addtasks);
  } catch (err) {
    console.log(err.message);
  }
};

const readTask = async (req, res) => {
  try {
    const sql = "SELECT * FROM todo_task WHERE ID = ? ";
    const id = req.params.id;
    const read = await db.query(sql, [id], (err, res) => {
      if (err) return res.json(err);
      res.json(res);
    });

    res.json(read[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateTask = async (req, res) => {
  const sql = "UPDATE todo_task SET `Author`=?, `Content`=? WHERE ID=?";
  const id = req.params.id;

  const tasks = await db.query(
    sql,
    [req.body.author, req.body.content, id],
    (err, res) => {
      if (err) return res.json(err);
      res.json(res);
    }
  );

  res.json(tasks);
};

const deleteTask = async (req, res) => {
  const sql = "DELETE FROM todo_task WHERE ID = ?";
  const id = req.params.id;

  const data = await db.query(sql, [id], (err, res) => {
    if (err) return console.log(err);
    return console.log(res);
  });

  res.json(data);
};

module.exports = { getAllTask, Addtask, readTask, updateTask, deleteTask };
