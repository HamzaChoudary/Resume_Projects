// import React, { useState } from "react";

// const TaskModel = () => {
//     const [isUnderlined, setIsUnderline] = useState(null);
//     const [tasks, setTasks] = useState([]); // Store tasks with descriptions
//     const [description, setDescription] = useState("");
//     const [showDescriptionField, setShowDescriptionField] = useState(false); // Toggle for the description field

//     const headtext = [
//         { id: 1, text: 'Task' },
//         { id: 2, text: 'Doc' },
//         { id: 3, text: 'Reminder' },
//         { id: 4, text: 'Chat' },
//         { id: 5, text: 'Whiteboard' },
//         { id: 6, text: 'Dashboard' },
//     ];

//     const handleClick = (id) => {
//         setIsUnderline(id);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (description) {
//             setTasks([...tasks, { description }]);
//             setDescription("");
//             setShowDescriptionField(false); // Hide the description field after submission
//         } else {
//             alert("Please enter a description.");
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-4 rounded shadow-lg">
//             <div className="flex flex-row mb-4">
//                     {headtext.map(({ id, text }) => (
//                         <span
//                             key={id}
//                             onClick={() => handleClick(id)}
//                             className={`cursor-pointer text-lg transition-all duration-200 ${isUnderlined === id ? 'underline' : 'hover:underline'} mb-2 px-2`}
//                         >
//                             {text}
//                         </span>
//                     ))}
//                 </div>
//                 <div className="mb-4">
//                     <button
//                         onClick={() => setShowDescriptionField(!showDescriptionField)}
//                         className="bg-blue-500 text-white p-2 rounded"
//                     >
//                         {showDescriptionField ? 'Cancel' : 'Add Description'}
//                     </button>
//                 </div>

//                 {showDescriptionField && (
//                     <form onSubmit={handleSubmit} className="flex flex-col mb-4">
//                         <input
//                             type="text"
//                             placeholder="Task Description"
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             className="border p-2 mb-2 rounded"
//                             required
//                         />
//                         <button type="submit" className="bg-green-500 text-white p-2 rounded">
//                             Add Task
//                         </button>
//                     </form>
//                 )}

//                 {/* Display the added tasks */}
//                 <div className="mt-4">
//                     <h3 className="font-semibold">Added Tasks:</h3>
//                     <ul className="list-disc pl-5">
//                         {tasks.map((task, index) => (
//                             <li key={index}>
//                                 <span className="font-bold">{task.description}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TaskModel;

import React, { useState, useEffect } from 'react';
import TaskInput from './underline'; // Import the new component

const TasksManager = () => {
  const [tasks, setTasks] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem('lists'));
    return savedItems || [];
  });

  const [filter, setFilter] = useState('all');
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ({ name, description }) => {
    setTasks([...tasks, { id: Date.now(), name, description, completed: false }]);
    setShowInput(false); // Hide input after adding
  };

  const editTask = (id) => {
    const existingTask = tasks.find(t => t.id === id);
    const newName = prompt('Edit task name:', existingTask ? existingTask.name : '');
    const newDescription = prompt('Edit task description:', existingTask ? existingTask.description : '');
    if (newName !== null && newDescription !== null) {
      setTasks(tasks.map(t => (t.id === id ? { ...t, name: newName, description: newDescription } : t)));
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-4xl text-center font-bold my-4">To-Do List</h1>

      {showInput ? (
        <TaskInput onAddTask={addTask} onCancel={() => setShowInput(false)} />
      ) : (
        <button onClick={() => setShowInput(true)} className="bg-blue-500 text-white p-2 mb-4">
          Add Task
        </button>
      )}

      <div className="mb-4">
        <label className="mr-2">Filter:</label>
        <select onChange={(e) => setFilter(e.target.value)} className="border p-2">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      <ul className="list-disc pl-5">
        {filteredTasks.map(({ id, name, description, completed }) => (
          <li key={id} className={`flex justify-between items-center mb-2 ${completed ? 'line-through text-gray-500' : ''}`}>
            <span onClick={() => toggleCompletion(id)} className="cursor-pointer">
              {name}
            </span>
            <span onClick={() => toggleCompletion(id)} className="cursor-pointer">
              {description}
            </span>
            <div>
              <button onClick={() => editTask(id)} className="bg-yellow-500 text-white px-2 py-1 mr-2">Edit</button>
              <button onClick={() => deleteTask(id)} className="bg-red-500 text-white px-2 py-1">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksManager;
