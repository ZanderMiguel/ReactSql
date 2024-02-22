import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Home from "./Home";
import AddTaskForm from "./AddTaskForm";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addtask" element={<AddTaskForm />} />
          </Routes>
        </BrowserRouter>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default App;
