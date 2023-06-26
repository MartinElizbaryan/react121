import { useEffect, useState } from "react";
import User from "../User/User.js";

const Users = (props) => {
  const { users } = props;

  const [usersFromStorage, setUsersFromStorage] = useState([]);

  const getUsersFromStorage = () => {
    const usersDataJSON = localStorage.getItem("users") || "[]";
    const usersData = JSON.parse(usersDataJSON);
    setUsersFromStorage(usersData);
  };

  useEffect(() => {
    getUsersFromStorage();
  }, []);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Website</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>

      {users.map((user) => {
        return (
          <tr>
            <User
              user={user}
              usersFromStorage={usersFromStorage}
              getUsersFromStorage={getUsersFromStorage}
            />
          </tr>
        );
      })}
    </table>
  );
};

export default Users;
