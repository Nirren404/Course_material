import React, { useState } from "react";

const LittleFruitListComponent = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  const [searchText, setSearchText] = useState("");

  const filtered = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div>
      <h2>#-1 Little Fruit List (Component)</h2>

      <input
        type="text"
        placeholder="Search fruits"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      <ul>
        {filtered.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default LittleFruitListComponent;
