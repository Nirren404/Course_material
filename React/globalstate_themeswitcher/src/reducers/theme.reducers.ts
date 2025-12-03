import type { ThemeState, ThemeAction } from "../types";
import {
  TOGGLE_THEME,
  SET_PRIMARY_COLOR,
  SET_BACKGROUND_COLOR,
} from "../types";

export const reducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      const newTheme = state.theme === "light" ? "dark" : "light";
      return {
        ...state,
        theme: newTheme,
        backgroundColor: newTheme === "light" ? "#ffffff" : "#1a1a1a",
        primaryColor: newTheme === "light" ? "#000000" : "#ffffff",
      };
    case SET_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.payload,
      };
    case SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.payload,
      };
    default:
      return state;
  }
};
