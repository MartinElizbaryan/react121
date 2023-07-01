import styles from "./styles";

const Tasks = (props) => {
  const { tasks, setShowAddComment, setTaskId } = props;

  const addComment = (id) => {
    setTaskId(id);
    setShowAddComment(true);
  };

  return (
    <div>
      <table style={styles.table}>
        <tr>
          <th style={styles.tdAndTh}>Id</th>
          <th style={styles.tdAndTh}>User</th>
          <th style={styles.tdAndTh}>Status</th>
          <th style={styles.tdAndTh}>Decription</th>
          <th style={styles.tdAndTh}>Action</th>
        </tr>

        {tasks.map((t) => {
          return (
            <tr>
              <td style={styles.tdAndTh}>{t.id}</td>
              <td style={styles.tdAndTh}>
                {t.user.name} {t.user.surname}
                {/* ! TODO make function for this */}
              </td>
              <td style={styles.tdAndTh}>{t.description}</td>
              <td style={styles.tdAndTh}>{t.status}</td>
              <td style={styles.tdAndTh}>
                <button onClick={() => addComment(t.id)}>Add Comment</button>
                <button>View Comments</button>
                <button>Edit</button>
                <button>Delete</button>
                <button>Active</button>
                <button>DeActive</button>
                <button>Done</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Tasks;
