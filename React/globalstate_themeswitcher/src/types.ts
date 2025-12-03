export type Theme = "light" | "dark";
export const TOGGLE_THEME = "toggle";
export const SET_PRIMARY_COLOR = "SET_PRIMARY_COLOR";
export const SET_BACKGROUND_COLOR = "SET_BACKGROUND_COLOR";

export type ThemeState = {
  theme: Theme;
  primaryColor: string;
  backgroundColor: string;
};

export type ThemeAction = 
  | { type: typeof TOGGLE_THEME }
  | { type: typeof SET_PRIMARY_COLOR; payload: string }
  | { type: typeof SET_BACKGROUND_COLOR; payload: string };
