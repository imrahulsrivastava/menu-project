import React from "react";

function Navigations({ setCategory }) {
  return (
    <nav className="navigations">
      <ul>
        <li onClick={() => setCategory("all")}>All</li>
        <li onClick={() => setCategory("breakfast")}>Breakfast</li>
        <li onClick={() => setCategory("lunch")}>Lunch</li>
        <li onClick={() => setCategory("shakes")}>Shakes</li>
      </ul>
    </nav>
  );
}

export default Navigations;
