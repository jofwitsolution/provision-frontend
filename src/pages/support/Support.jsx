import React, { useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";
import SupportHeroSect from "./SupportHeroSect";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta title={"Support | ProVision Property"} />
      <Navbar />
      <Sidebar />
      <SupportHeroSect />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Support;
