import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import HomePage from "./pages/HomePage";
import AddTaskPage from "./pages/AddTaskPage";
import "./App.css";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <h1>Task Tracker</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-task" element={<AddTaskPage />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
};

export default App;
