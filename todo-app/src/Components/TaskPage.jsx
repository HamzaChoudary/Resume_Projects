import { useState } from 'react';

export default function TaskPage({ task, onSave, onCancel }) {
  const [taskName, setTaskName] = useState(task ? task.name : '');
  const [subtasks, setSubtasks] = useState(task ? task.subtasks || [] : []);
  const [newSubtask, setNewSubtask] = useState(''); // Holds the new subtask value

  // Add a new subtask to the list
  const handleAddSubtask = () => {
    if (newSubtask.trim() === '') return; // Don't add empty subtasks
    setSubtasks([...subtasks, { name: newSubtask, completed: false }]);
    setNewSubtask(''); // Reset input after adding
  };

  // Remove a subtask by its index
  const handleRemoveSubtask = (index) => {
    setSubtasks(subtasks.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (taskName.trim() === '') {
      alert('Task name cannot be empty');
      return;
    }
    onSave({
      name: taskName,
      completed: task ? task.completed : false,
      subtasks,
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{task ? 'Edit Task' : 'Add Task'}</h2>
      
      {/* Task Name Input */}
      <input
        type="text"
        className="border p-2 w-full rounded mb-4"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
      />
      
      {/* Subtasks List */}
      <h3 className="text-lg font-semibold mb-2">Subtasks</h3>
      <ul className="mb-4">
        {subtasks.map((subtask, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{subtask.name}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleRemoveSubtask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Add Subtask Input */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border p-2 w-full rounded"
          value={newSubtask}
          onChange={(e) => setNewSubtask(e.target.value)}
          placeholder="New subtask"
        />
        <button
          // className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
          onClick={handleAddSubtask}
        >
          Add Subtask
        </button>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex">
        <button className="bg-green-500 text-white px-4 py-2 rounded mr-4" onClick={handleSave}>
          {task ? 'Update Task' : 'Create Task'}
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
