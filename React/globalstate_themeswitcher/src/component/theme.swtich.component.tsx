import { useContext } from "react";
import ThemeContext from "../context/theme.context";

const ThemeSwitchComponent = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div>
      <p>Current theme: {state.theme}</p>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitchComponent;
