export default function TaskItem({ task, onEdit, onDelete }) {
    return (
      <li className="flex justify-between items-center bg-white p-4 rounded mb-2 shadow">
        <div>
          <span className={task.completed ? 'line-through' : ''}>{task.name}</span>
        </div>
        <div>
          <button
            className={`mr-2 px-4 py-2 ${task.completed ? 'bg-green-500' : 'bg-gray-500'} text-white rounded`}
            onClick={() => task.completed = !task.completed}
          >
            {task.completed ? 'Unmark' : 'Mark'}
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2" onClick={onEdit}>
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onDelete}>
            Delete
          </button>
        </div>
      </li>
    );
  }
  