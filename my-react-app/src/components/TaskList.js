import React from 'react';

const TaskList = ({ tasks, onComplete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.text}
          {!task.completed ? (
            <button onClick={() => onComplete(index)}>Complete</button>
          ) : (
            <span style={{ color: 'green', marginLeft: '10px' }}>
              (Completed)
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
