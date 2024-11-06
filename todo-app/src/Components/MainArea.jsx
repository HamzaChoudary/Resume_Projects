import React from 'react'

const MainArea = ({ tasks,  handleDelete, handleEdit }) => {

  return (

    <div className='flex h-screen'> 
        <div className='bg-yellow-200 flex justify-center items-center'>
            Hello World

        </div>
        
        {/* {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-sm text-gray-700">{task.description}</p>
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            <p className="text-sm text-gray-500">Assignee: {task.assignee}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks added yet.</p>
      )} */}
      </div>
  )
}

export default MainArea