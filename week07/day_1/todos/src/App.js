import { useState } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Buy shopping",
      priority: "high",
      id: 1,
    },
    {
      name: "Clear bathroom",
      priority: "low",
      id: 2,
    },
    {
      name: "Car MOT",
      priority: "high",
      id: 3,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  };
  const [priority, setPriority] = useState("");
  const handleRadioButton = (event) => {
    setPriority(event.target.value);
  };

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({
      name: newTask,
      priority: priority,
      id: Date.now(),
    });
    setTasks(copyTasks);

    setNewTask("");
  };

  return (
    <div className="App">
      <h1>ToDo's</h1>

      <form onSubmit={handleTaskSubmit}>
        <label htmlFor="new-task"> Add a new task</label>
        <input
          type="text"
          id="new-task"
          onChange={handleTaskInput}
          value={newTask.name}
        />
        <input
          type="radio"
          name="priority"
          value="high"
          onChange={handleRadioButton}
          checked={newTask.priority === "high"}
          id="high"
        />

        <label htmlFor="high">High</label>
        <input
          type="radio"
          name="priority"
          value="low"
          onChange={handleRadioButton}
          checked={newTask.priority === "low"}
          id="low"
        />
        <label htmlFor="low">Low</label>

        <button> Save Task</button>
      </form>
      <ul>
        {tasks.map((task) => {
          return (
            <li
              className={
                task.priority === "high" ? "high-priority" : "low-priority"
              }
            >
              {task.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
