// AddTaskDialog.js
import React, { useState } from "react";
import TaskSidebar from "./TaskSidebar";
import TabHeader from "./TabHead";
import TaskForm from "./TaskForm";
import MainArea from  "./MainArea";


const AddTaskDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Task");
  const [task, setTask] = useState({ title: "", description: "", dueDate: "", assignee: "" });
  const [tasks, setTasks] = useState([]);

//   Open Dialog box 
  const handleOpen = () => setIsOpen(true);
//   Close Dialog box 
  const handleClose = () => setIsOpen(false);

//   Save task 
  const handleSave = () => {
    setTasks([...tasks, task]);
    setTask({ title: "", description: "", dueDate: "", assignee: "" });
    handleClose();
  };

//   Change Tabs on Dialog box
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  return (
    
    <div className="flex h-screen">
      {/* Sidebar */}
      <TaskSidebar tasks={tasks} />

      {/* Tab Head Content Area  */}
      <div className=" h-32 w-11/12 bg-gray-300 ">

      <div className="flex justify-center mt-10 font-semibold text-2xl ">
            <h1>TODO LIST</h1>
        </div>
        <div className="flex justify-end mx-12">
        <button
          onClick={handleOpen}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button> 
        </div>
      </div>
        {/* Main Content Area */}
            <MainArea tasks={tasks} />

      

      {/* Overlay and Modal for Add Task */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-200 rounded-lg p-6 w-2/5 shadow-lg">
            {/* <h2 className="text-lg font-semibold mb-4">Add New Task</h2> */}

            {/* Tabs inside the dialog box */}
            <TabHeader
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={["Task", "Doc", "Reminder", "Chat", "Whiteboard", "Dashboard"]}
            />

{/* If we want add the Doc related content then we need to add there content from another components */}
            {/* Content based on active tab */}
            {/* Task Content */}
            {activeTab === "Task" && <TaskForm task={task} handleChange={handleChange} />}
            {/* Doc Content */}
            {activeTab === "Doc" && (
              <div className="text-gray-400">Document feature coming soon!</div>
            )}
            {/* Reminder Content */}
            {activeTab === "Reminder" && (
              <div className="text-gray-400">Reminder feature coming soon!</div>
            )}
            {/* Chat Content */}
            {activeTab === "Chat" /* Here we need to add content on chat*/ && (
                <div className="text-gray-400" >Chat feature coming soon!</div>
            )}
            {/* Whiteboard Content */}
            {activeTab === "Whiteboard" && (
                <div className="text-gray-400 ">Whiteboard feature coming soon!</div>
            )}
            {/* Dasboard Content */}
            {activeTab === "Dashboard" && (
                <div className="text-gray-400" > Dashboard feature coming soon!</div>
            )}


            {/* Action Buttons */}
            <div className="flex justify-end mt-4">
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
                Create Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaskDialog;
