import User from "../User/User.js";

const Users = (props) => {
  console.log(props);
  //   console.log(props.users);

  const { users } = props;

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Website</th>
          <th>Address</th>
        </tr>
      </thead>

      {users.map((user) => {
        return (
          <tr>
            <User user={user} />
          </tr>
        );
      })}
    </table>
  );
};

export default Users;
