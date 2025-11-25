import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
// import Partners from "../../components/Partners/Partners";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* <Partners /> */}
    </div>
  );
};

export default Home;
