import React, { useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";
import CommunityHeroSect from "./CommunityHeroSect";
import CommunitySectOne from "./CommunitySectOne";
import JoinUs from "../../components/ui/JoinUs";
import CommunitySectTwo from "./CommunitySectTwo";

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta title={"Community | Provision Support Services CIC"} />
      <Navbar />
      <Sidebar />
      <CommunityHeroSect />
      <CommunitySectOne />
      <CommunitySectTwo />
      <JoinUs />
      <Footer />
    </>
  );
};

export default Community;
