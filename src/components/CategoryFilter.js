import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
