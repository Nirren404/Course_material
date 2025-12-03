export type User = {
  id: number;
  firstname: string;
  lastname: string;
  image: string;
  email: string;
};

export type CounterState = {
  count: number;
};

export type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };
