import React, { useState } from "react";

const CategoryFilterComponent = () => {
  const products = [
    { id: 1, name: "Laptop", category: "tech" },
    { id: 2, name: "Smartphone", category: "tech" },
    { id: 3, name: "Headphones", category: "tech" },
    { id: 4, name: "Apple", category: "food" },
    { id: 5, name: "Banana", category: "food" },
    { id: 6, name: "Bread", category: "food" },
    { id: 7, name: "T-Shirt", category: "clothing" },
    { id: 8, name: "Jeans", category: "clothing" },
    { id: 9, name: "Jacket", category: "clothing" },
  ];

  const [category, setCategory] = useState("all");

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div>
      <h2>#-2 Category Filter (Component)</h2>
      <button onClick={() => setCategory("all")}>All</button>{" "}
      {/*extra button */}
      <button onClick={() => setCategory("tech")}>Tech</button>
      <button onClick={() => setCategory("food")}>Food</button>
      <button onClick={() => setCategory("clothing")}>Clothing</button>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilterComponent;
