import Tasks from "../Tasks/Tasks";
import AddComment from "../AddComment/AddComment";
import useMain from "./useMain";

const Main = () => {
  const { tasks, taskId, setTaskId, showAddComment, setShowAddComment } =
    useMain();

  return (
    <div>
      {/* <Filtering /> */}
      <Tasks
        tasks={tasks}
        setShowAddComment={setShowAddComment}
        setTaskId={setTaskId}
      />
      {/* <Create /> */}

      {showAddComment && <AddComment taskId={taskId} />}
    </div>
  );
};

export default Main;
