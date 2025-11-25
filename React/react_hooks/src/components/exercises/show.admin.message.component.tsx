import React from "react";

type UserProps = {
  username: string;
  isAdmin: boolean;
};

const ShowAdminMessageComponent: React.FC<UserProps> = ({
  username,
  isAdmin,
}) => {
  return (
    <div>
      <h1>Show Admin Message</h1>
      {isAdmin ? (
        <p>Welcome, {username}. You have admin access.</p>
      ) : (
        <p>Welcome, {username}. You are not an admin.</p>
      )}
    </div>
  );
};

export default ShowAdminMessageComponent;
