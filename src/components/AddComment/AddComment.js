import { useState } from "react";

const AddComment = (props) => {
  const { taskId } = props;
  const [comment, setComment] = useState("");

  const add = () => {
    console.log({ taskId, comment });
  };

  return (
    <div>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button>Cancel</button>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AddComment;
