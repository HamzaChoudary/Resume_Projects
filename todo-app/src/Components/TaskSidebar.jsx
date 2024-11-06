// TaskSidebar.js
import React, { useState } from "react";
import SideTaskForm1 from "./SidebarForm/SideTaskForm1" ;

// Icons
import { SiClickup } from "react-icons/si";
import { MdInsertEmoticon } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
// import { BsThreeDots } from "react-icons/bs";
// import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { RiVirusLine } from "react-icons/ri";


const TaskSidebar = ({ tasks }) => {
  // State 
  const {Openit, setOpenIt} = useState(false);
  const {Task, setTask} = useState({ Icon: "", Project: "", description: "",});


  // Functionality

  const handleopen = () => setOpenIt(true);
  const handleClose = () => setOpenIt(false);

  // Handle Change 
  const handlechange = (e) => {
    // Code here
    const { nam, value} = e.target;
    setTask((Toggle) => ({...Toggle, [nam]: value }));
  };

  return (
    <div className="w-1/5 bg-gray-300 p-4 overflow-y-auto">
      <div className="">
      {/* For User Id  */}
      <div className="font-semibold" >
        <SiClickup className="bg-white text-blue-600 p-1 rounded-2xl " />
      <h1 className="flex justify-start items-center gap-1 ml-1 py-4"> <MdInsertEmoticon /> Hamza's Works... <IoMdArrowDropdown /></h1>
      </div>
      {/* Features  */}
      <div>
      <div className="mt-24">
        <h3>Features</h3>
      </div>
      </div>
      {/* For Space  */}
      <div className="flex items-center text-xl gap-16 mt-24">
      <h2 className=" font-semibold mb-4">Spaces
      </h2>
      <span className="flex justify-center gap-1">
        {/*<BsThreeDots className="justify-center" /> <CiSearch className="justify-center" />   */}
      <FaPlus 
      onClick={handleopen}
      className="bg-blue-500 p-1"
        /> </span>
      
      </div>
      <RiVirusLine />
      <h5>Everything</h5>

          {/* Overly and Modal to add Sidebar Tasks  */}
        {Openit && (

          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
              <h2>Create Space</h2>
              <p>A Space represents teams, departments, or groups, each with its own Lists, workflows, and settings.</p>
              <form action="">
                <label htmlFor="icon&name">Icon & name</label>
                <input type="text" name="icon&name" value={Task.Icon} handlechange={handlechange} />
                <label htmlFor="icon&name">Icon & name</label>
                <input type="text" name="icon&name" value={Task.Project} handlechange={handlechange} />
                <label htmlFor="description">Description <span>optional</span></label>
                <input type="text" name="description" value={Task.description} handlechange={handlechange} />

                <div>
                  <h1>Private</h1>
                  <p>Add sk e text here</p>
                  <input type="radio" />
                </div>

                {/* Action button  */}
                <div>
                  <h1>use templates</h1>

                  <button onClick={handleClose}>
                    Continue
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}
      
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="hover:bg-gray-100 p-4 rounded shadow mb-4">
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-sm text-gray-700">{task.description}</p>
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            <p className="text-sm text-gray-500">Assignee: {task.assignee}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks added yet.</p>
      )}

      </div>
     
    </div>
  );
};

export default TaskSidebar;
