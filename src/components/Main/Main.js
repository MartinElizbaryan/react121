import Users from "../Users/Users.js";
import useMain from "./useMain.js";

const Main = () => {
  const { toggleTable, isShowTable, users } = useMain();

  return (
    <div>
      <button onClick={toggleTable}>Show Table</button>

      <br />
      <br />

      {isShowTable && <Users users={users} />}
    </div>
  );
};

export default Main;

// = useState(100)
// [100, fn]
