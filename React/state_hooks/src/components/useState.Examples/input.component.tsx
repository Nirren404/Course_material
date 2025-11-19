import React, { useState } from "react";

function MyInput() {
  const [text, setText] = useState<string>("InitialState");
  console.log(text);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>Example - string with useState / Single Input</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>You type: {text}</p>

      <button onClick={() => setText("InitialState")}>RESET</button>
    </div>
  );
}

export default MyInput;
