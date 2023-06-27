import { useState, useEffect } from "react";

const EditUser = (props) => {
  const { id, users } = props;
  console.log({ users });

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    const userToEdit = users.find((user) => {
      return user.id === id;
    });

    setName(userToEdit?.name);
    setSurname(userToEdit?.surname);
  }, [id]);

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleSurnameChange = (newSurname) => {
    setSurname(newSurname);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}
      />

      <input
        type="text"
        value={surname}
        onChange={(e) => handleSurnameChange(e.target.value)}
      />

      <button>Save</button>
    </div>
  );
};

export default EditUser;
