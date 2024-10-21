import React, { useState, useEffect } from 'react';
import SubModal from './SubModel.jsx';
import TaskModel from './Task-Model.jsx';
import Tasklist from './TaskList.jsx';

const TasksManager = ({props}) => {
  // For store data
  const [tasks, setTasks] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem('lists'));
    return savedItems || [];
  });

  // const [inputtask, setInputTask] = useState(''); // for task state
  const [showModal, setShowModal] = useState(false); // for open modal state
  const [currentsubTaskId, setCurrentsubTaskId] = useState(null); // for current task ID
  const [filter, setFilter] = useState('all'); // for filter state
  const [openModaladd, setOpenModaladd] = useState(false);
  const [currenttaskId, setCurrenttaskId] = useState(null);
  const [addtasks, setAddTasks] = useState([]);
  const [newTaskText, setNewtaskText] = useState('');

  // set data to localStorage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(tasks));
  }, [tasks]);


  // add task
  const addNewTask = () => {
    if (newTaskText.trim()) {  // Use newTaskText for input 
        setAddTasks([ ...addtasks, { id: Date.now(), text: newTaskText }]); // Create new task
        setNewtaskText(''); // Clear the input field
    } else {
        alert('Please enter a task.'); // Alert if input is empty
    }
  };
  //For add task Open Model
  const  openModaltask = () => {
    setCurrenttaskId();
    setOpenModaladd(true);
  };
  const closeModaltask = () => {
    setOpenModaladd(false);
    setCurrenttaskId(null);
  };

  // add subtask
  const addSubTask = (subtaskId, subtaskInput) => {
    const newTasks = tasks.map(task => {
      if (task.id === subtaskId) {
        // Ensure subtasks is initialized as an empty array
        return {
          ...task,
          subtasks: [...(task.subtasks || []), { id: Date.now(), text: subtaskInput, completed: false }],
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // open modal
  const openModal = (subtaskId) => {
    setCurrentsubTaskId(subtaskId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentsubTaskId(null);
  };

  const editTask = (id) => {
    const existingTask = tasks.find(t => t.id === id);
    const newText = prompt('Edit task:', existingTask ? existingTask.text : '');
    if (newText !== null) {
      setTasks(tasks.map(t => (t.id === id ? { ...t, text: newText } : t)));
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
    return true; // all
  });

  return (
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-4xl text-center text-gray font-bold my-4">To-Do List</h1>
      <div className="flex flex-row mb-4">
        {/* <input
          type="text"
          value={inputtask}
          onChange={(e) => setInputTask(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Add a new task"
        /> */}
      
        <button onClick={() => { openModaltask()}} className="bg-green-500 text-white p-2 ml-2">Add Task</button>
        
        {/* <div className="mt-5 pl-4 list-disc">
              {addtasks.map(task => (
                <div key={task.id} className={`flex justify-between items-center mt-4 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  <span onClick={() => toggleCompletion(task.id)} className='cursor-pointer'>{task.text}</span>
                </div>
              ))}
            </div>
      </div> */}
      <div className="mb-4">
        <label className="mr-2">Filter:</label>
        <select onChange={(e) => setFilter(e.target.value)} className="border p-2">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      {/* Addtask Model */}
        {/* Render list of tasks */}
         <div>
          {addtasks.map(task => (
            <div key={task.id} className="p-2 border-b">
              {task.text}
            </div>
          ))}
        </div>
      <ul className="list-none pl-5">
        {filteredTasks.map(({ id, text, completed, description, subtasks = [] }) => (
          <li key={id} className={`flex-inline justify-between items-center mb-2 ${completed ? 'line-through text-gray-500' : ''}`}>
            <span onClick={() => toggleCompletion(id)} className="cursor-pointer text-2xl">
            <Tasklist props={addedTasks} /></span>
            <div>
              <button onClick={() => openModal(id)} className="bg-yellow-500 text-white text-bold px-2 py-1 mr-4">+</button>
              <button onClick={() => editTask(id)} className="bg-blue-500 text-white px-2 py-1 mr-2">Edit</button>
              <button onClick={() => deleteTask(id)} className="bg-red-600 text-white px-2 py-1">Delete</button>
            </div>
            {/* Subtask Display */}
            <div className="mt-5 pl-4 list-disc">
              {subtasks.map(subtask => (
                <div key={subtask.id} className={`flex justify-between items-center mt-4 ${subtask.completed ? 'line-through text-gray-500' : ''}`}>
                  <span onClick={() => toggleCompletion(subtask.id)} className='cursor-pointer'>{subtask.text}</span>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <SubModal
        isOpen={showModal}
        onClose={closeModal}
        onSubmit={(subtaskInput) => {
          addSubTask(currentsubTaskId, subtaskInput);
          closeModal();
        }}
      />
      <TaskModel
        isOpen={openModaladd}
        onClose={closeModaltask}
        onSubmit={(taskInput) => {
          addSubTask(currenttaskId, taskInput);
          closeModaltask();
        }}
      />
    </div>
    </div>
  );
};

export default TasksManager;
