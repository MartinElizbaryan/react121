import Main from "./components/Main/Main";
import usersData from "./data/users";

localStorage.setItem("users", JSON.stringify(usersData));

function App() {
  return <Main />;
}

export default App;
