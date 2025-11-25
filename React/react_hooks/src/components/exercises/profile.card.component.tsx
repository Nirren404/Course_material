import { useState } from "react";

const ProfileCardComponent = () => {
  const [user, setUser] = useState<{ name: string; age: number }>({
    name: "Alice",
    age: 25,
  });

  const changeName = () => {
    const names = ["Alice", "Bob", "Charlie", "Diana"];
    const currentIndex = names.indexOf(user.name);
    const nextIndex = (currentIndex + 1) % names.length;
    setUser({ ...user, name: names[nextIndex] });
  };

  const increaseAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const decreaseAge = () => {
    setUser({ ...user, age: user.age - 1 });
  };

  return (
    <div className="profile-card">
      <h2>Profile Card Component</h2>
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
      <button onClick={changeName}>Change Name</button>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={decreaseAge}>Decrease Age</button>
    </div>
  );
};

export default ProfileCardComponent;
