import React, { useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";
import FAQs from "../../components/ui/FAQs";
import FaqsHeroSect from "./FaqsHeroSect";

const FaqsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title={"FAQs | ProVision Property"}
        description={"provision property management FAQs"}
        keywords={
          "provision property management FAQs, provision property management and support service FAQs, provision support service FAQs"
        }
      />
      <Navbar />
      <Sidebar />
      <FaqsHeroSect />
      <FAQs />
      <Footer />
    </>
  );
};

export default FaqsPage;
