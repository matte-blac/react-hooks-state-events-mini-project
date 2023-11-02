import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // state variables for text and category
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  // function to handle submission
  function handleSubmit(e) {
    // prevents refreshing
    e.preventDefault();
    // condition to only submit if text and category are not empty
    if (text !== "" && category !== "") {
      onTaskFormSubmit({ text, category });
      //reset text and category after submission
      setText("");
      setCategory(categories[0]);
    }
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          {/* map through and filter categories and create an option for each one */}
          {categories
            .filter((cat) => cat !== "All")
            .map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
