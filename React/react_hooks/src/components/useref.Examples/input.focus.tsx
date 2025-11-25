import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div>
      <h2>Input focus with REF</h2>

      <input ref={inputRef} type="text" placeholder="Type something!" />

      <button onClick={focusInput}> Focus</button>
    </div>
  );
};
export default InputFocus;
