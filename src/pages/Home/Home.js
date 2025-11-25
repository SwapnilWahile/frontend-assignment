import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
// import Partners from "../../components/Partners/Partners";

import "./Home.scss";
import SectionContact from "../../components/SectionContact/SectionContact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* <Partners /> */}
      <SectionContact />
      <Footer />
    </div>
  );
};

export default Home;
