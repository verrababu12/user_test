import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./AddTaskForm.css";
import { TaskContext } from "../context/TaskContext";

const AddTaskForm = () => {
  const { setTasks } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, { ...formData, id: Date.now() }]);
    navigate("/"); // Navigate back to the home page
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleInputChange}
        placeholder="dd/mm/yyyy"
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleInputChange}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit" className="submit-button">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
