import React, { useState, useEffect } from "react";

const App = () => {
  // States
  const [projects, setProjects] = useState(() => JSON.parse(localStorage.getItem("projects")) || []);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [taskFilter, setTaskFilter] = useState("all");
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [taskFormData, setTaskFormData] = useState({ name: "", description: "", dueDate: "" });
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");

  // Load projects from localStorage when the component mounts
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Get today's date in "YYYY-MM-DD" format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Handle Add/Edit Task
  const handleAddEditTask = () => {
    if (!taskFormData.name || !taskFormData.description || !taskFormData.dueDate) {
      alert("Task name, description, and due date are required.");
      return;
    }

    let updatedProjects = [...projects];
    const task = {
      name: taskFormData.name,
      description: taskFormData.description,
      dueDate: taskFormData.dueDate,
      completed: false,
    };

    if (currentTaskIndex !== null) {
      // Edit existing task
      updatedProjects[currentProjectIndex].tasks[currentTaskIndex] = task;
    } else {
      // Add new task
      updatedProjects[currentProjectIndex].tasks.push(task);
    }

    setProjects(updatedProjects);
    setTaskFormData({ name: "", description: "", dueDate: "" });
    setIsTaskFormOpen(false);
    setCurrentTaskIndex(null);
  };

  // Handle Delete Task
  const handleDeleteTask = (taskIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[currentProjectIndex].tasks.splice(taskIndex, 1);
    setProjects(updatedProjects);
  };

  // Handle Mark Task as Completed/Incomplete
  const handleMarkTask = (taskIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[currentProjectIndex].tasks[taskIndex].completed =
      !updatedProjects[currentProjectIndex].tasks[taskIndex].completed;
    setProjects(updatedProjects);
  };

  // Handle Add Project
  const handleAddProject = () => {
    if (!newProjectName.trim()) {
      alert("Please enter a project name.");
      return;
    }

    const updatedProjects = [...projects, { name: newProjectName, tasks: [] }];
    setProjects(updatedProjects);
    setCurrentProjectIndex(updatedProjects.length - 1); // Select the newly added project
    setNewProjectName(""); // Clear the input field
    setIsProjectFormOpen(false); // Close the project form
  };

  // Handle Delete Project
  const handleDeleteProject = (projectIndex) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(projectIndex, 1); // Remove the project
    setProjects(updatedProjects);
    if (currentProjectIndex === projectIndex) {
      setCurrentProjectIndex(null); // Deselect if it's the current project
    }
  };

  // Filter Tasks based on completion status
  const getFilteredTasks = () => {
    if (!projects[currentProjectIndex]) return [];
    const allTasks = projects[currentProjectIndex].tasks;
    if (taskFilter === "completed") return allTasks.filter((task) => task.completed);
    if (taskFilter === "incomplete") return allTasks.filter((task) => !task.completed);
    return allTasks;
  };

  return (
    <div>
      <div className="h-1/6 p-4 ml-0 bg-gray-200">
        <h1 className="text-center text-3xl font-semibold my-4">Todo List</h1>
        <div className="flex justify-end pr-10 pt-4">
          <button
            onClick={() => setIsProjectFormOpen(true)}
            className="bg-blue-500 text-white px-3 mb-3"
          >
            Add Project
          </button>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Side Dashboard - Project List */}
        <aside className="w-1/6 bg-gray-200 p-4">
          <h2 className="text-2xl text-center mb-4">Dashboard</h2>
          <h5 className="text-xl mb-4">Projects</h5>
          <ul>
            {projects.map((project, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 mb-2 ${currentProjectIndex === index ? "bg-gray-300" : "bg-gray-200"}`}
                onClick={() => setCurrentProjectIndex(index)}
              >
                {project.name}
                <div className="flex flex-row justify-items-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent project selection when clicking Remove
                      handleDeleteProject(index);
                    }}
                    className="bg-red-500 text-white text-end px-1 mx-1 rounded-full"
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Area - Project Details and Tasks */}
        <main className="w-3/4 p-6">
          {currentProjectIndex !== null && projects[currentProjectIndex] ? (
            <div>
              <div className="w-1/1 px-5">
                <h1 className="text-3xl mb-4">{projects[currentProjectIndex].name}</h1>
                <div className="grid justify-items-end mr-20">
                  <button
                    className="bg-green-500 text-white py-1/1 px-1 rounded mb-4"
                    onClick={() => {
                      setIsTaskFormOpen(true);
                      setTaskFormData({ ...taskFormData, dueDate: getCurrentDate() }); // Set current date as default due date
                    }}
                  >
                    Add Task
                  </button>
                </div>

                {/* Filter Options */}
                <div className="mb-4">
                  <label htmlFor="filter" className="mr-2">Filter Tasks: </label>
                  <select id="filter" value={taskFilter} onChange={(e) => setTaskFilter(e.target.value)} className="border p-2">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                  </select>
                </div>
              </div>

              {/* Task List */}
              <ul>
                {getFilteredTasks().map((task, taskIndex) => (
                  <div className="hover:bg-green-500">
                    <li key={taskIndex} className="p-4 mb-2 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl">{task.name}</h3>
                      <p>{task.description}</p>
                      <p>Due Date: {task.dueDate}</p> {/* Display due date */}
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => handleMarkTask(taskIndex)}
                        className="bg-yellow-500 text-white py-1/1 px-1 rounded mr-2"
                      >
                        {task.completed ? "Unmark" : "Mark"}
                      </button>
                      <button
                        onClick={() => {
                          setIsTaskFormOpen(true);
                          setCurrentTaskIndex(taskIndex);
                          setTaskFormData({
                            name: task.name,
                            description: task.description,
                            dueDate: task.dueDate,
                          });
                        }}
                        className="bg-blue-500 text-white py-1/1 px-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTask(taskIndex)}
                        className="bg-red-500 text-white py-1/1 px-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                  </div>
                ))}
              </ul>

              {/* Task Form */}
              {isTaskFormOpen && (
                <div className="flex-inline flex-column bg-gray-200 p-6 rounded mt-4">
                  <h3 className="text-xl mb-4">{currentTaskIndex !== null ? "Edit Task" : "Add Task"}</h3>
                  <input
                    type="text"
                    placeholder="Task Name"
                    value={taskFormData.name}
                    onChange={(e) => setTaskFormData({ ...taskFormData, name: e.target.value })}
                    className="border p-2 w-full mb-4"
                  />
                  <textarea
                    placeholder="Task Description"
                    value={taskFormData.description}
                    onChange={(e) => setTaskFormData({ ...taskFormData, description: e.target.value })}
                    className="border p-2 w-full mb-4"
                  />
                  <label htmlFor="dueDate" className="mr-2">Due Date:</label>
                  <input
                    type="date"
                    id="dueDate"
                    value={taskFormData.dueDate}
                    onChange={(e) => setTaskFormData({ ...taskFormData, dueDate: e.target.value })}
                    className="border p-2 w-full mb-4"
                  />
                  <div className="grid justify-items-center">
                    <button
                      onClick={handleAddEditTask}
                      className="bg-green-500 text-white py-1/1 px-1 rounded mr-2"
                    >
                      {currentTaskIndex !== null ? "Update Task" : "Create Task"}
                    </button>
                    <button
                      onClick={() => setIsTaskFormOpen(false)}
                      className="bg-gray-500 text-white py-1/1 px-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p>Select a project to view tasks.</p>
          )}
        </main>
      </div>

      {/* Project Form Modal */}
      {isProjectFormOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl mb-4">Add New Project</h2>
            <input
              type="text"
              placeholder="Project Name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <div className="grid justify-items-center">
              <button onClick={handleAddProject} className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
                Add Project
              </button>
              <button
                onClick={() => setIsProjectFormOpen(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
