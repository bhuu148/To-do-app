import React, { useState } from 'react';
import TaskList from './components/TaskList';
import './App.css';
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };
  const handleCompleteTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: true } : t
    );
    setTasks(updatedTasks);
  };
  return (
    <div className="container">
      <h1>Todo List App</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New Task"
        />
        <button type="submit">Add</button>
      </form>
      <TaskList tasks={tasks} onComplete={handleCompleteTask} />
    </div>
  );
};
export default App;
