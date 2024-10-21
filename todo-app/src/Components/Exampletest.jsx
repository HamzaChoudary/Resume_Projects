import React, { useState } from 'react';
import parent from './Task-Model';

const AddTask = () => {
    // Declare Parent variable for props 
    const title = props
    

  const [isAddingTask, setIsAddingTask] = useState(false); // To track whether the input field should show
  const [task, setTask] = useState(''); // To store the task entered
  const [taskSubmitted, setTaskSubmitted] = useState(''); // To store the submitted task

  // Show input field when "Add Task" button is clicked
  const handleAddTaskClick = () => {
    setIsAddingTask(true);
  };

  // Update the task state when user types in input field
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    setTaskSubmitted(task); // Store the submitted task
    setIsAddingTask(false); // Hide the input field after submission
    setTask(''); // Clear the input field
  };

  return (
    <div>
      {/* If no task is submitted, show the Add Task button or input */}
      {!taskSubmitted && (
        <>
          {!isAddingTask ? (
            <button onClick={handleAddTaskClick} className="bg-blue-500 text-white px-4 py-2">
              Add Task
            </button>
          ) : (
            <div>
              <input 
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="Enter your task"
                className="p-2 border"
              />
              <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 ml-2">
                Submit
              </button>
            </div>
          )}
        </>
      )}

      {/* Display the task once it's submitted */}
      {taskSubmitted && (
        <div className="mt-4 p-2 border bg-gray-100">
          <h3>Task: {taskSubmitted}</h3>
        </div>
      )}
    </div>
  );
};

export default AddTask;
