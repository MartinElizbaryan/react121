import styles from "./styles";
import useUsers from "./useUsers";

const Users = (props) => {
  //   const { setEditableUser } = useUsers();
  const { users } = props;
  const { setEditableUser } = useUsers(props);

  return (
    <table style={styles.table}>
      <tr>
        <th style={styles.tdAndTh}>ID</th>
        <th style={styles.tdAndTh}>Name</th>
        <th style={styles.tdAndTh}>Surname</th>
        <th style={styles.tdAndTh}>Actions</th>
      </tr>

      {users.map((user) => {
        return (
          <tr>
            <td style={styles.tdAndTh}>{user.id}</td>
            <td style={styles.tdAndTh}>{user.name}</td>
            <td style={styles.tdAndTh}>{user.surname}</td>
            <td style={styles.tdAndTh}>
              <button onClick={() => setEditableUser(user.id)}>Edit</button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Users;
