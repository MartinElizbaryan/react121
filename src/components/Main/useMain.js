import { useEffect, useState } from "react";

const useMain = () => {
  const [users, setUsers] = useState([]);
  const [isShowTable, setIsShowTable] = useState(true);

  useEffect(() => {
    console.log("called");
    getUsers();
  }, []);

  const getUsers = async () => {
    const usersJSON = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await usersJSON.json();
    setUsers(usersData);
  };

  const toggleTable = () => {
    // if (isShowTable === false) {
    //   setIsShowTable(true);
    // } else {
    //   setIsShowTable(false);
    // }

    setIsShowTable(!isShowTable);
  };

  return { toggleTable, isShowTable, users };
};

export default useMain;
