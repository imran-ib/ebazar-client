import React from "react";
import { useUser } from "components/Utils/auth";

interface Props {}

const Home = (props: Props) => {
  const user = useUser();

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
