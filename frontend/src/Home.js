import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import axios from "axios";
import TaskTable from "./components/TaskTable";

const Home = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    axios("http://localhost:8081/api/task/")
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Container>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ minWidth: 800 }}>
          <TaskTable task={task} />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
