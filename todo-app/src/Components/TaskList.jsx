import React from 'react';

const TaskList = ({ tasks }) => {

    return (
        <div>
            {/* Use this file for props  */}
            <ul>
        {
        tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          tasks.map((task, _index) => (
            <li key={task.id}>{task.text}</li> // Display each task in the list
          ))
        )
        }
      </ul>
        </div>
    );
};

export default TaskList;