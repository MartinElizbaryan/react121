import Main from "./components/Main/Main";
import tasksData from "./data/tasks";

// ! TODO make function for this
// const tasksInStorage = localStorage.getItem("tasks");
// if (tasksInStorage === null) {
//   console.log(1);
localStorage.setItem("tasks", JSON.stringify(tasksData));
// }

function App() {
  return <Main />;
}

export default App;
