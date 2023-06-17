const styles = {
  td: {
    padding: "10px 20px",
  },
  redColor: {
    color: "red",
  },
};

const getAddress = (user) => {
  return `${user.address.city} | ${user.address.city}`;
};

const User = (props) => {
  const { user } = props;

  return (
    <>
      <td style={styles.td}>
        <span style={styles.redColor}>{user.name}</span>
      </td>
      <td style={styles.td}>{user.website}</td>
      <td style={styles.td}>{getAddress(user)}</td>
    </>
  );
};

export default User;
