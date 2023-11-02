import React from "react";

function Task({ text, category, onDelete }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      {/* delete button for the task. onClick- triggers the onDelete function function passed as a prop  */}
      <button className="delete" onClick={onDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
