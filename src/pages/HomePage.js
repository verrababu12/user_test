import React from "react";
import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";

const HomePage = () => {
  return (
    <div>
      <Link to="/add-task" className="add-task-button">
        Add Task
      </Link>
      <TaskList />
    </div>
  );
};

export default HomePage;
