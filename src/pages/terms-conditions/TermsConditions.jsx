import React, { useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";
import TermCondHeroSect from "./TermCondHeroSect";
import TermCondSectOne from "./TermCondSectOne";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title={"Terms & Conditions | ProVision Property"}
        description={"provision property management terms and conditions"}
        keywords={
          "provision property management terms and conditions, provision property management and support service terms and conditions, provision support service terms and conditions"
        }
      />
      <Navbar />
      <Sidebar />
      <TermCondHeroSect />
      <TermCondSectOne />
      <Footer />
    </>
  );
};

export default TermsConditions;
