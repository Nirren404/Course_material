import { createContext } from "react";
import type { CounterState, CounterAction } from "../types";

const CounterContext = createContext<{
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
}>({
  state: { count: 0 },
  dispatch: () => {},
});

export default CounterContext;
