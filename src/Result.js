import { memo, useEffect } from "react"; // hoc = hire order component

const Result = ({ number }) => {
  console.log("Render from Result");

  useEffect(() => {
    const id = setInterval(() => {
      console.log({ number });
    }, 1000);

    console.log({ id });

    return () => {
      console.log("unMount");
      clearInterval(id);
    };
  }, [number]);

  return (
    <div>
      {" "}
      <hr /> Result Component - {number}
    </div>
  );
};

export default memo(Result);
