import { useState } from "react";

const InputMirrorComponent = () => {
  const [inputtext, setInputtext] = useState<string>("");
  return (
    <div className="input-mirror">
      <h2>Input Mirror Component</h2>
      <input
        type="text"
        value={inputtext}
        onChange={(e) => setInputtext(e.target.value)}
      />
      <p>Mirrored Input: {inputtext}</p>
    </div>
  );
};

export default InputMirrorComponent;
