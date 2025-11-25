import React from "react";

type LoggedInGreetingProps = {
  isLoggedIn: boolean;
};

const LoggedInGreeting: React.FC<LoggedInGreetingProps> = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in</p>;
  }
};

function LoggedInGreetingComponent() {
  const isLoggedIn = true;

  return (
    <div className="">
      <h1>Logged In Greeting</h1>
      <LoggedInGreeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default LoggedInGreetingComponent;
