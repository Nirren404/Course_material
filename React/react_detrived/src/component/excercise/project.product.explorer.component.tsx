import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Laptop", category: "tech", price: 1200 },
  { id: 2, name: "Smartphone", category: "tech", price: 800 },
  { id: 3, name: "Headphones", category: "tech", price: 250 },
  { id: 4, name: "Apple", category: "food", price: 1 },
  { id: 5, name: "Banana", category: "food", price: 2 },
  { id: 6, name: "Bread", category: "food", price: 3 },
  { id: 7, name: "T-Shirt", category: "clothing", price: 20 },
  { id: 8, name: "Jeans", category: "clothing", price: 45 },
  { id: 9, name: "Jacket", category: "clothing", price: 60 },
];

const ProjectProductExplorerComponent = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState("none");

  const filteredProducts = productsData.filter((product) => search!);

  return (
    <div>
      <h2>#-3 Project Product Explorer (Component)</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default ProjectProductExplorerComponent;
