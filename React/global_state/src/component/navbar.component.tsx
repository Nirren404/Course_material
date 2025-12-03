import { useContext } from "react";
import UserContext from "../context/user.context";
import { userInfo } from "../data";

const NavbarComponent = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <header>
      <h2>LOGO</h2>
      <nav>links</nav>
      <div>
        <p>{user ? user.firstname : "Guest"}</p>
        <img src={user?.image} alt={user?.firstname} />
      </div>
      <p>{user ? user.email : " "}</p>
      <button onClick={() => setUser(null)}>Log out</button>
      <button onClick={() => setUser(userInfo)}>Log in</button>
    </header>
  );
};

export default NavbarComponent;
