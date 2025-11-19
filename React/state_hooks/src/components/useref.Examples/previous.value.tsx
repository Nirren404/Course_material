import React, { useRef, useEffect, useState } from "react";

const PreviousValue = () => {
  const [text, setText] = useState<string>("");
  const prevText = useRef<string>("ghostshooter");

  useEffect(() => {
    prevText.current = text;
  }, [text]);
  return (
    <div>
      Previous Value
      <h2>Show prevoius text with ref</h2>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>current {text}</p>
      <p> OLD username {prevText.current}</p>
    </div>
  );
};

export default PreviousValue;
