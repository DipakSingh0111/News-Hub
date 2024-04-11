import React from "react";
import Hero from "../components/Hero";
import FetchData from "../components/FetchData";

const Home = () => {
  return (
    <div>
      <h1>
        <Hero />
        <FetchData />
      </h1>
    </div>
  );
};

export default Home;
