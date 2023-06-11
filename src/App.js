import { useState } from "react";
import { greaterOrEqualZero, getYear } from "./helpers.js";
// import * as x from "./helpers.js";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const resetInputValues = () => {
    setName("");
    setSurname("");
    setAge("");
  };

  const onSave = () => {
    const newUser = {
      name,
      surname,
      year: getYear(age),
    };

    setUsers([...users, newUser]);

    resetInputValues();
  };

  return (
    <div>
      <input
        style={{ marginRight: 4 }}
        value={name}
        onChange={handleChangeName}
      />
      <input
        style={{ marginRight: 4 }}
        value={surname}
        onChange={handleChangeSurname}
      />
      <input
        style={{ marginRight: 4 }}
        value={age}
        onChange={handleChangeAge}
      />

      <button onClick={onSave}>Save</button>

      <br />

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>

        {users.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.year}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default App;

// = useState(100)
// [100, fn]
