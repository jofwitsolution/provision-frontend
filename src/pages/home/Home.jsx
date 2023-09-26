import React from "react";
import Navbar from "../../components/navigation/Navbar";
import HomeHeroSection from "./HomeHeroSection";
import Sidebar from "../../components/navigation/Sidebar";
import HomeSearchSect from "./HomeSearchSect";
import HomeFindSect from "./HomeFindSect";
import HomeCareSect from "./HomeCareSect";
import HomeManageSect from "./HomeManageSect";
import WhyChooseUs from "../../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <HomeHeroSection />
      <HomeSearchSect />
      <HomeFindSect />
      <HomeCareSect />
      <HomeManageSect />
      <WhyChooseUs />
    </>
  );
};

export default Home;
