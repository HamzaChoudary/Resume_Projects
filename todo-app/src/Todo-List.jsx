import React, { useState, useEffect } from 'react';

const TasksManager = () => {

  const [tasks, setTasks] = useState( () => {
    // load task from local Storage
    const savedITems = JSON.parse(localStorage.getItem('lists'));
    return savedITems || [];
  });  // for localStorage  State

  const [task, setTask] = useState('');   // for add state
  
  const [filter, setFilter] = useState('all'); // for filter state

  // Save tasks to local storage whenever task add
    useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(tasks));
  }, [tasks]);

  // Load (get) tasks from local storage on component mount
  // useEffect (() => {
  //   let saveditems = JSON.parse(localStorage.getItem('lists')) || [];
  //   console.log(saveditems);
  //   setTasks(saveditems);
  // }, []);

  // Add task 
  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask(''); // Clear input after adding
    }else {
      alert('Please enter a task.'); // Provide feedback
    }
  };

// Edit task 
const editTask = (id) => {
  const existingTask = tasks.find(t => t.id === id); // find existing tasks
  const newText = prompt('Edit task:', existingTask ? existingTask.text : ''); 
  if (newText !== null) { // Handle cancellation
    setTasks(tasks.map(t => (t.id === id ? { ...t, text: newText } : t)));
  }
};

// Delete task 
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };
// For filter toggle completion task 
  const toggleCompletion = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };
// For filting task 
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true; // all
  });

  return (
    <div className=" max-w-lg mx-auto p-5">
      <h1 className="text-4xl text-center font-bold my-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={task} // Use 'task' instead of 'input'
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Add a new task"
        />
        <button onClick={addTask} className="bg-blue-500 text-white p-2 ml-2">Add</button>
      </div>
      <div className="mb-4">
        <label className="mr-2">Filter:</label>
        <select onChange={(e) => setFilter(e.target.value)} className="border p-2">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <ul className="list-disc pl-5">
        {filteredTasks.map(({ id, text, completed }) => (
          <li key={id} className={`flex justify-between items-center mb-2 ${completed ? 'line-through text-gray-500' : '' }`}>
            <span onClick={() => toggleCompletion(id)} className="cursor-pointer">{text}</span>
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
