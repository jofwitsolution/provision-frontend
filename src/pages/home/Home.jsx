import React from "react";
import Navbar from "../../components/navigation/Navbar";
import HomeHeroSection from "./HomeHeroSection";
import Sidebar from "../../components/navigation/Sidebar";
import HomeSearchSect from "./HomeSearchSect";
import HomeFindSect from "./HomeFindSect";
import HomeSupportSect from "./HomeSupportSect";
import HomeManageSect from "./HomeManageSect";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import Footer from "../../components/Footer";
import WhoWeAre from "../../components/ui/WhoWeAre";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <HomeHeroSection />
      <WhoWeAre />
      <HomeSearchSect />
      <HomeFindSect />
      <HomeSupportSect />
      <HomeManageSect />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Home;
