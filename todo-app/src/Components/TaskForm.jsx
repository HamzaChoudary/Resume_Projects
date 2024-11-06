// TaskForm.js
import React from "react";

const TaskForm = ({ task, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="3"
      />

      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <input
        type="text"
        name="assignee"
        value={task.assignee}
        onChange={handleChange}
        placeholder="Assignee"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
    </div>
  );
};

export default TaskForm;
