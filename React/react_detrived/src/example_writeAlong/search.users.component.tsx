import React, { useState } from "react";

const SearchUsersComponent = () => {
  type User = {
    id: number;
    name: string;
    isOnline: boolean;
  };

  const initialUsers: User[] = [
    { id: 1, name: "Alice", isOnline: true },
    { id: 2, name: "Bob", isOnline: false },
    { id: 3, name: "Charlie", isOnline: true },
    { id: 4, name: "David", isOnline: false },
    { id: 5, name: "Eve", isOnline: true },
    { id: 6, name: "Frank", isOnline: false },
    { id: 7, name: "Grace", isOnline: true },
    { id: 8, name: "Heidi", isOnline: false },
    { id: 9, name: "Ivan", isOnline: true },
    { id: 10, name: "Judy", isOnline: false },
  ];

  const [users, setUsers] = useState<User[]>(initialUsers);

  const match = (item: string, query: string) => {
    return item.toLowerCase().includes(query.toLowerCase());
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (!query) {
      setUsers(initialUsers);
      return;
    }
    const filteredUsers = users.filter((user) => match(user.name, query));
    setUsers(filteredUsers);
  };

  return (
    <div>
      Search Users Component
      <h1>online users</h1>
      <input type="text" placeholder="search users" onChange={handleSearch} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.isOnline ? "(Online)" : "(Offline)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchUsersComponent;
