import React from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList() {
  const [tasks, setTasks] = React.useState(TASKS);

  const handleDelete = (text) => {
    setTasks(tasks.filter((task) => task.text !== text));
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => handleDelete(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskList;
