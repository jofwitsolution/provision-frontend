import React, { useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import Footer from "../../components/Footer";
import AboutHeroSect from "./AboutHeroSect";
import AboutWhoWeAre from "./AboutWhoWeAre";
import CoreValues from "../../components/ui/CoreValues";
import Meta from "../../components/Meta";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title={"About Us | ProVision Support Services CIC"}
        description={"About ProVision Support Services CICs"}
        keywords={
          "ProVision Support Services CIC about page, ProVision Support Services CIC about page, provision support service about page"
        }
      />
      <Navbar />
      <Sidebar />
      <AboutHeroSect />
      <AboutWhoWeAre />
      <CoreValues />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default About;
