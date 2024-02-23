import React, { useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import {
  Box,
  Paper,
  Container,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";

const Read = () => {
  const [taskRead, setTaskRead] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/task/read/${id}`)
      .then((res) => {
        setTaskRead(res.data[0]);
      })
      .catch((err) => console.log(err));
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
        <Paper sx={{ minWidth: 600, padding: "2rem 2rem 1rem" }}>
          <Typography variant="h5">Details</Typography>
          <Divider sx={{ marginBottom: "1rem" }} />
          <Box display="flex" alignItems="center" gap={1.5}>
            <Typography variant="h6">Name:</Typography>
            <Typography paddingTop="0.2em" variant="body1">
              {taskRead.Author}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Typography variant="h6">Content:</Typography>
            <Typography paddingTop="0.2em" variant="body1">
              {taskRead.Content}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="right" marginTop="1rem" gap={1}>
            <Button
              component={Link}
              to={`/update/${taskRead.ID}`}
              variant="contained"
              size="small"
            >
              Edit
            </Button>
            <Button
              component={Link}
              to={"/home"}
              variant="contained"
              size="small"
            >
              Back
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Read;
