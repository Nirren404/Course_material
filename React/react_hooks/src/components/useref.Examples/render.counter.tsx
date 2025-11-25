import React, { useRef, useState } from "react";

const RenderCount = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  return (
    <div>
      <h2>Render counter</h2>
      <p>Count in state: {count}</p>
      <p>Count in REF: {renderCount.current}</p>
      <hr />

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment state count
      </button>
      <button onClick={() => renderCount.current++}>Increment REF count</button>

      <div className="">
        <h2>NOTE</h2>
        <p>
          Clicking the "Increment state count" button will not trigger a
          re-render.
        </p>
      </div>
    </div>
  );
};

export default RenderCount;
