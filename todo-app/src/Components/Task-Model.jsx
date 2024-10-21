import React, { useState } from 'react';
// import Tasklist from './TaskList';

// THis is parent components 
const Modal = ({ isOpen, onClose }) => {


    // For Header Underline 
  const [isUnderlined, setIsUnderline] = useState();

//   For Add Task in OpenField (Model) todo list
  const [addedTasks, setAddTasks] = useState([]);
  const [newTaskText, setNewtaskText] = useState('');

  if (!isOpen) return null; // Don't render the modal if it's not open

  const addTask = () => {
    if (newTaskText.trim()) {  // Use newTaskText for input 
        setAddTasks([ ...addedTasks, { id: Date.now(), text: newTaskText }]); // Create new task
        setNewtaskText(''); // Clear the input field
    } else {
        alert('Please enter a task.'); // Alert if input is empty
    }
  };

  const headtext = [
    { id: 1, text: 'Task' },
    // { id: 2, text: 'Doc' },
    // { id: 3, text: 'Reminder' },
    // { id: 4, text: 'Chat' },
    // { id: 5, text: 'Whiteboard' },
    // { id: 6, text: 'Dashboard' },
  ];

  const handleClick = (id) => {
    setIsUnderline(id);
  };

  return (
    <>
        {/* Dashboard  */}
        <div className='w-100 flex flex-column mt-4 p-2'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row'>
                    <div className='flex flex-row'>
                        <h2>Dashboard</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        {headtext.map(({ id, text }) => (
          <><span
                key={id}
                onClick={() => handleClick(id)} // Pass a function handleClick
                className={`cursor-pointer text-lg transition-all duration-200 ${isUnderlined === id ? 'underline underline-offset-4' : 'hover:underline underline-offset-4 '} mb-2 px-2 `}
            >
                {text}
            </span><form action="">
                    <div className="flex flex-column">
                        <input
                            type="text"
                            value={newTaskText}
                            onChange={(e) => setNewtaskText(e.target.value)}
                            className="border-none flex-grow flex-shrink p-2  my-4"
                            placeholder="Enter task" />
                        <div className="mt-2">
                            <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 mr-2">Cancel</button>
                            <button type='submit' onClick={addTask} className="bg-blue-500 text-white px-4 py-2">Create task</button>
                        </div>
                    </div>
                </form></>
        ))}

        
      </div>

      
      {/* Render list of tasks */}
      {/* <div>
          {addtasks.map(task => (
            <div key={task.id} className="p-2 border-b">
              {task.text}
            </div>
          ))}
        </div> */}
      
    </div>
    </>
  );
};

export default Modal;

