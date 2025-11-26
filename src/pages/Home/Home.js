import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import "./Home.scss";
import SectionContact from "../../components/SectionContact/SectionContact";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home">
   <Navbar />
    <Hero />
    {/* <Partners /> */}
    <SectionContact />
    <Footer />
  </div>
  );
}

export default Home;
