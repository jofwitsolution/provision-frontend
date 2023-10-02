import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import Footer from "../../components/Footer";
import AboutHeroSect from "./AboutHeroSect";
import AboutWhoWeAre from "./AboutWhoWeAre";

const About = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <AboutHeroSect />
      <AboutWhoWeAre />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default About;
