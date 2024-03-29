import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddTaskForm = () => {
  const [date, setDate] = useState(null);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { author: author, content: content };

    axios
      .post("http://localhost:8081/api/task/addtask", task)
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

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
        <Paper sx={{ minWidth: 700, padding: "2rem" }}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Add Task Form
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            {/* <DatePicker
              value={date}
              onChange={(newValue) => setDate(newValue)}
              fullWidth
            /> */}
            <TextField
              sx={{ marginTop: "1rem", marginBottom: "1rem" }}
              label="Author Name"
              placeholder="Enter author's name"
              variant="outlined"
              fullWidth
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <TextField
              sx={{ marginBottom: "1rem" }}
              label="Content"
              placeholder="Enter content"
              variant="outlined"
              fullWidth
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default AddTaskForm;
