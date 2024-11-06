import React from 'react'

const SidebarForm1 = ({Task, handlechange }) => {
  return (
    <div>

        <label htmlFor="icon&name">Icon & name</label>
        <input
        type="text" 
        name='icon&name' 
        value={Task.icon} 
        handlechange={handlechange}
        placeholder='icon'
        className="w-1 p-2 border border-gray-300 rounded-2xl mb-4"
         />
        <input
        type="text" 
        name='icon&name' 
        value={Task.icon} 
        handlechange={handlechange}
        placeholder='e.g. Daily task'
        className="w-full p-2 border border-gray-300 rounded mb-4"
         />

         <label htmlFor="description">Description</label>
         <input 
         type="text" 
         name='description' 
         value={Task.description}
         handlechange={handlechange}
         placeholder='Optional'
         className='w-full p-2 border hover:border-gray-300 roundes mb-4'
         />
    </div>
  )
}

export default SidebarForm1