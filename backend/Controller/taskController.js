const db = require("../dbConnect");

const getAllTask = async (req, res) => {
  try {
    const Tasks = await db.query("SELECT * FROM todo_task");
    res.json(Tasks[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

// const addEmployee = async (req, res) => {
//   try {
//     const addEmp = await db.query(
//       `INSERT INTO employees VALUES (6, "Cedric Hiquiana", 70000, "EMPC78" )`
//     );
//     res.json(addEmp);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

module.exports = { getAllTask };
