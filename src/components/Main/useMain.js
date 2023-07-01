import { useEffect, useState } from "react";

const useMain = () => {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(null);
  const [showAddComment, setShowAddComment] = useState(false);

  useEffect(() => {
    const tasksData = localStorage.getItem("tasks");
    setTasks(JSON.parse(tasksData) || []);
  }, []);

  return {
    tasks,
    taskId,
    setTaskId,
    showAddComment,
    setShowAddComment,
  };
};

export default useMain;
