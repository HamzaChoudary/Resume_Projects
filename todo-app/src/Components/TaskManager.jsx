import React, { useState, useEffect } from 'react'

const TaskManager = () => {
    // States 
    const [Projects, setProjects] = useState(() => JSON.parse(localStorage.getItem('projects')) || []);
    const [isOpen, setIsopen] = useState('');
    const [tasks, setTasks] = useState([]);


    // Functionality 

    // Load projects from localStorage when the component mounts
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(Projects));
  }, [Projects]);

//    For open field to set task 
    const openfieldproject = () => {

    };

    // Handle dialog box 
    const handleOpen = () => setIsopen(true);
    const handleClose = () => setIsopen(false);
    const handleSave = () => {
        // handle save task here 
            console.log('Task Saved', tasks);
        handleClose();
    };


    // Handle Add Projects
    const AddProjects = () => {
        setTasks(...tasks,  {name: "", description: "", status: ""})
        console.log(tasks);
        }

        // Handle Delete Task 
        const  DeleteTask = (id) => {
            setTasks(tasks.filter((task) => task.id !== id));
            setProjects();
            }


  return (
    <div>
        {/* Head list to add project tasks  */}
        <div className='h-1/6 bg-gray-200 p-4 ml-0 '> 
        <h1 className='text-center text-3xl font-semibold my-4'>
            TODO LIST
            </h1>
            {/* Button to add task */}
            <div className='flex justify-end pr-10 pt-4'>
            <button
            onClick={handleOpen}
            className='bg-blue-500 text-white px-4 mb-2'
            >Add Project</button>
            </div>
        </div>
        {/* {tasks.map(() => {

        })} */}

          {/* Overlay and Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
            <input
              type="text"
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
              placeholder="Task title"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
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
      )
}

export default TaskManager