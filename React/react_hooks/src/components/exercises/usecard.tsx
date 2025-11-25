import React from "react";

type cardProps = {
  id: number;
  name: string;
  age: number;
};

const useCard = () => {
  const users: cardProps[] = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Sam Johnson", age: 45 },
  ];
  return (
    <div className="card">
      <h2>Exercise - User Cards</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
      <style>{`
    .card {
        witdth: 300px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 2px 2px 12px rgba(248, 10, 10, 0.1);
    
    `}</style>
    </div>
  );
};

export default useCard;
