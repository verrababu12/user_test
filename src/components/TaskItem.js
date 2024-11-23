import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import "./TaskItem.css";

const TaskItem = ({ task }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(task);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setTasks(tasks.map((t) => (t.id === task.id ? editData : t)));
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input
            name="title"
            value={editData.title}
            onChange={handleEditChange}
          />
          <textarea
            name="description"
            value={editData.description}
            onChange={handleEditChange}
          />
          <input
            type="date"
            name="dueDate"
            value={editData.dueDate}
            onChange={handleEditChange}
          />
          <select
            name="status"
            value={editData.status}
            onChange={handleEditChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <div className="actions">
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <p>{task.status}</p>
          <div className="actions">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
