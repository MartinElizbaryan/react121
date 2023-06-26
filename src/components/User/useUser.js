const useUser = (props) => {
  const { user, usersFromStorage, getUsersFromStorage } = props;
  console.log("render");

  const isInStorage = usersFromStorage.find((u) => u.id === user.id);

  const saveUser = () => {
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);
      users.push(user);
    } else {
      users = [user];
    }

    users = JSON.stringify(users);
    localStorage.setItem("users", users);

    getUsersFromStorage();
  };

  const deleteUser = () => {
    const deletedUserIndex = usersFromStorage.findIndex(
      (u) => u.id === user.id
    );

    usersFromStorage.splice(deletedUserIndex, 1);

    const usersFromStorageJSON = JSON.stringify(usersFromStorage);
    localStorage.setItem("users", usersFromStorageJSON);

    getUsersFromStorage();
  };

  return {
    saveUser,
    deleteUser,
    isInStorage,
  };
};

export default useUser;
