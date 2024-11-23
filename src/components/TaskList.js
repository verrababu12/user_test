import React, { useContext, useState } from "react";
import "./TaskList.css";
import TaskItem from "./TaskItem";
import FilterBar from "./FilterBar";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState("All");

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="task-list">
      <FilterBar currentFilter={filter} setFilter={setFilter} />
      <div className="tasks-container">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
