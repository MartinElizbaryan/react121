import { getAddress } from "../../helpers/user";
import DeleteButton from "../_shared/buttons/DeleteButton/DeleteButton";
import MainButton from "../_shared/buttons/MainButton/MainButton";
import styles from "./styles";
import useUser from "./useUser";

const User = (props) => {
  const { user } = props;
  const { saveUser, deleteUser, isInStorage } = useUser(props);

  return (
    <>
      <td style={styles.td}>
        <span style={styles.redColor}>{user.name}</span>
      </td>
      <td style={styles.td}>
        <a href={"http://" + user.website} target="_blank">
          {user.website}
        </a>
      </td>
      <td style={styles.td}>{getAddress(user)}</td>
      <td style={styles.td}>
        {!isInStorage ? (
          <MainButton onClick={saveUser} startIcon={"+"}>
            Save
          </MainButton>
        ) : (
          <DeleteButton onClick={deleteUser} startIcon={"+"}>
            Delete
          </DeleteButton>
        )}
      </td>
    </>
  );
};

export default User;
