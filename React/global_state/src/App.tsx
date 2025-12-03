import UserContext from "./context/user.context";
import { userInfo } from "./data";
import { useReducer, useState } from "react";
import { type User } from "./types";
import NavbarComponent from "./component/navbar.component";
import CounterComponent from "./component/counter.component";
import CounterContext from "./context/counter.context";
import { reducer } from "./reducers/counter.reducers";

const App = () => {
  const [user, setUser] = useState<User | null>(userInfo);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CounterContext.Provider value={{ state, dispatch }}>
        <NavbarComponent />
        <CounterComponent />
      </CounterContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
