import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Home from "./Home";
import AddTaskForm from "./AddTaskForm";
import Read from "./Read";
import Update from "./Update";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/addtask" element={<AddTaskForm />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default App;
