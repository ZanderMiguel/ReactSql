import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Update = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/task/read/${id}`)
      .then((res) => {
        const data = res.data[0];
        setAuthor(data.Author);
        setContent(data.Content);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { author: author, content: content };

    axios
      .put(`http://localhost:8081/api/task/update/${id}`, values)
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

export default Update;
