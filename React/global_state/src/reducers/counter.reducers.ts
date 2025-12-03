import type { CounterAction, CounterState } from "../types";

export const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
};
