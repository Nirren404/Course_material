import { useState } from "react";

const ProfileCardComponent = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  return (
    <div>
      <h2>Profile Card</h2>

      <button onClick={() => setProfile({ ...profile, age: profile.age + 1 })}>
        ➕
      </button>
    </div>
  );
};

export default ProfileCardComponent;

/* <h2>Profile Card</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>

       */
