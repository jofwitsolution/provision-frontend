import React from "react";
import Navbar from "../../components/navigation/Navbar";
import HomeHeroSection from "./HomeHeroSection";
import Sidebar from "../../components/navigation/Sidebar";
import HomeSearchSect from "./HomeSearchSect";
import HomeFindSect from "./HomeFindSect";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <HomeHeroSection />
      <HomeSearchSect />
      <HomeFindSect />
    </>
  );
};

export default Home;
