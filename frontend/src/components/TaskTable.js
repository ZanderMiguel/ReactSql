import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const TaskTable = ({ task }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8081/api/task/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <TableContainer component={Paper}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem",
        }}
      >
        <Typography variant="h5">Task Todo</Typography>
        <Button component={Link} to="/addtask" variant="contained">
          Add
        </Button>
      </Box>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> TASK ID </TableCell>
            <TableCell align="center">DATE</TableCell>
            <TableCell align="center"> AUTHOR </TableCell>
            <TableCell align="center"> CONTENT </TableCell>
            <TableCell align="center"> ACTION </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!task.length ? (
            <Box
              display="flex"
              minHeight="20vh"
              justifyContent="center"
              alignItems="center"
            >
              <Typography fullWidth> NO CONTENT</Typography>
            </Box>
          ) : (
            task.map((tasks) => (
              <TableRow key={tasks.ID}>
                <TableCell>{tasks.ID}</TableCell>
                <TableCell align="center">{tasks.DATE}</TableCell>
                <TableCell align="center">{tasks.Author}</TableCell>
                <TableCell align="center">{tasks.Content}</TableCell>
                <TableCell align="center">
                  <Button
                    sx={{
                      marginRight: ".5rem",
                    }}
                    size="small"
                    variant="contained"
                    component={Link}
                    to={`/read/${tasks.ID}`}
                  >
                    Read
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ marginRight: ".5rem" }}
                    size="small"
                    color="secondary"
                    component={Link}
                    to={`/update/${tasks.ID}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ marginRight: ".5rem" }}
                    size="small"
                    color="error"
                    onClick={() => handleDelete(tasks.ID)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
