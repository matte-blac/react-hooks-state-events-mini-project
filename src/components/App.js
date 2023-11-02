import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // state variables for selected category and tasks
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  // function to handle category click
  function handleCategoryClick(category) {
    setSelectedCategory(category);
    console.log(category);
  }

  // function to handle task deletion
  function handleDelete(text) {
    setTasks(tasks.filter((task) => task.text !== text));
  }

  // function to handle task form submission
  function handleTaskFormSubmit(task) {
    setTasks([...tasks, task]);
  }

  // determine tasks to display based on category
  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={tasksToDisplay} onDelete={handleDelete} />
    </div>
  );
}

export default App;
