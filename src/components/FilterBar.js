import React from "react";
import "./FilterBar.css";

const FilterBar = ({ currentFilter, setFilter }) => {
  const filters = ["All", "Pending", "In Progress", "Completed"];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={currentFilter === filter ? "active" : ""}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
