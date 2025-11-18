import { useState } from "react";

const AgeCounterComponent = () => {
  const [name, setName] = useState<string>(" ");
  const [age, setAge] = useState<number>(0);
  return (
    <div>
      <h2>Example - string & number - useState - Age counter</h2>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>Plus Age</button>
      <button onClick={() => setAge(age - 1)}>Minus Age</button>

      <br />
      {name && age > 0 && (
        <p>
          Hello my name is {name}, I am {age} years old
        </p>
      )}
    </div>
  );
};

export default AgeCounterComponent;

console.log();
