import { useReducer } from "react";
import ThemeContext from "./context/theme.context";
import { reducer } from "./reducers/theme.reducers";
import ThemeSwitchComponent from "./component/theme.swtich.component";
import SettingsPage from "./pages/settingspage";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    theme: "light",
    primaryColor: "#3b82f6",
    backgroundColor: "#ffffff",
  });

  return (
    <div
      style={{
        backgroundColor: state.backgroundColor,
        height: "100vh",
        width: "100vw",
        color: state.primaryColor,
      }}
    >
      <ThemeContext.Provider value={{ state, dispatch }}>
        <ThemeSwitchComponent />
        <SettingsPage />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
