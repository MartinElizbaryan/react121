import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { homeId } = useParams();
  console.log(homeId);

  return (
    <div>
      <div>Home page</div>
    </div>
  );
};

export default Home;
