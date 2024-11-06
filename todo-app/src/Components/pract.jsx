import React, { useState } from "react";

const AddTaskDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Task");
  const [task, setTask] = useState({ title: "", description: "", dueDate: "", assignee: "" });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSave = () => {
    console.log("Task Saved:", task);
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center h-screen">
      {/* Header with Tabs */}
      <div className="w-full bg-gray-100 shadow">
        <div className="flex justify-center space-x-8 py-4 border-b">
          {["Task", "Doc", "Reminder"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-gray-700 pb-2 ${
                activeTab === tab ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {tab}
              {activeTab === tab && <div className="h-1 mt-2 bg-blue-500 rounded-full"></div>}
            </button>
          ))}
        </div>
      </div>

      {/* Content area with Add Task Button */}
      <div className="flex justify-center items-center flex-grow">
        {activeTab === "Task" && (
          <button
            onClick={handleOpen}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Task
          </button>
        )}
      </div>

      {/* Overlay and Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add New Task</h2>

            {/* Input Fields for Task */}
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

            {/* Buttons */}
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaskDialog;
