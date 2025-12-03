import { createContext } from "react";
import type { ThemeState, ThemeAction } from "../types";

type ThemeContextType = {
  state: ThemeState;
  dispatch: (action: ThemeAction) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  state: {
    theme: "light",
    primaryColor: "#3b82f6",
    backgroundColor: "#ffffff",
  },
  dispatch: () => {},
});

export default ThemeContext;
