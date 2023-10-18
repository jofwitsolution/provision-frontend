import React, { useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";
import CommunityHeroSect from "./CommunityHeroSect";

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta title={"Community | ProVision Property"} />
      <Navbar />
      <Sidebar />
      <CommunityHeroSect />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Community;
