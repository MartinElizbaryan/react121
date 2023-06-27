import { useState, useEffect } from "react";
import Users from "../Users/Users";
import EditUser from "../EditUser/EditUser";

const Main = () => {
  const [id, setId] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let usersData = localStorage.getItem("users");
    setUsers(JSON.parse(usersData));
    setId(1);
  }, []);

  return (
    <div>
      <Users users={users} />

      <EditUser id={id} users={users} />
    </div>
  );
};

export default Main;
