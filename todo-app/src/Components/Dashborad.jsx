import { useState } from "react";
import TaskItem from "./TaskItem";

export default function Dashboard({ tasks = [], onAddTask, onEditTask, onDeleteTask }) {
    const [filter, setFilter] = useState('all');
  
    const filteredTasks = tasks.filter(task => {
      if (filter === 'completed') return task.completed;
      if (filter === 'incomplete') return !task.completed;
      return true;
    });
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={onAddTask}
        >
          Add Task
        </button>
        <div className="mb-4">
          <label className="mr-2">Filter:</label>
          <select
            className="border p-2 rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        <ul>
          {filteredTasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onEdit={() => onEditTask(index)}
              onDelete={() => onDeleteTask(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
  