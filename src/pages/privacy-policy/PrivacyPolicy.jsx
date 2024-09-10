import React, { useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";
import PrivacyHeroSect from "./PrivacyHeroSect";
import PrivacySectOne from "./PrivacySectOne";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title={"Privacy Policy | Provision Support Services CIC"}
        description={"Provision Support Services CIC privacy policy"}
        keywords={
          "Provision Support Services CIC privacy policy, Provision Support Services CIC privacy policy, provision support service privacy policy"
        }
      />
      <Navbar />
      <Sidebar />
      <PrivacyHeroSect />
      <PrivacySectOne />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
