import { useContext } from "react";
import ThemeContext from "../context/theme.context";
import {
  TOGGLE_THEME,
  SET_PRIMARY_COLOR,
  SET_BACKGROUND_COLOR,
} from "../types";

const SettingsPage = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const handlePrimaryColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SET_PRIMARY_COLOR, payload: e.target.value });
  };

  const handleBackgroundColorChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: SET_BACKGROUND_COLOR, payload: e.target.value });
  };

  const handleToggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <div>
      <h2>Settings Page</h2>

      <div>
        <p>
          <strong>Current theme:</strong> {state.theme}
        </p>
      </div>

      <div>
        <label>
          <strong>Primary Color:</strong>
        </label>
        <input
          type="color"
          value={state.primaryColor}
          onChange={handlePrimaryColorChange}
          style={{ cursor: "pointer" }}
        />
        <p>{state.primaryColor}</p>
      </div>

      <div>
        <strong>Background Color:</strong>

        <input
          type="color"
          value={state.backgroundColor}
          onChange={handleBackgroundColorChange}
          style={{ cursor: "pointer" }}
        />
        <p>{state.backgroundColor}</p>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default SettingsPage;
