import { useState } from "react";

const greetingMessageComponent = () => {
  const [name, setName] = useState<string>("Hello Guest");

  return (
    <div>
      <h2>Greeting Message Component</h2>

      <button onClick={() => setName("Nirari")}>Set Name</button>

      <p>Hello, {name}!</p>
    </div>
  );
};

export default greetingMessageComponent;
