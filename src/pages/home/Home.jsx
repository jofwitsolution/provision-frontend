import React from "react";
import Navbar from "../../components/navigation/Navbar";
import HomeHeroSection from "./HomeHeroSection";
import Sidebar from "../../components/navigation/Sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <HomeHeroSection />
    </>
  );
};

export default Home;
