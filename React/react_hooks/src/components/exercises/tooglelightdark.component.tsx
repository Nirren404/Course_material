import { useState } from "react";

const ToogleLightDarkComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  if (isDarkMode) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  return (
    <div className={`toggle-container ${isDarkMode ? "dark" : "light"}`}>
      <h2>Toggle Light/Dark Component</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle</button>
    </div>
  );
};

export default ToogleLightDarkComponent;
