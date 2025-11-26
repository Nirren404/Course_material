import React, { useState } from "react";
import CustomButton from "./custombutton";

const TogglingUI = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <CustomButton
        label={isVisible ? "Hide" : "Show"}
        onClick={toggleVisibility}
      />

      {isVisible && <div>This is the toggled wow!</div>}
    </div>
  );
};

export default TogglingUI;
