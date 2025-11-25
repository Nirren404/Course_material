import { useEffect, useState } from "react";

type Geo = {
  lat: string;
  lng: string;
};

type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};

type Address = {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: Geo;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  company: Company;
  phone: string;
  website: string;
};

const EffectExampleComponent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  console.log("users", users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EffectExampleComponent;
