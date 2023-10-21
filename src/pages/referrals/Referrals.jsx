import React from "react";
import Meta from "../../components/Meta";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import ReferralsHeroSect from "./ReferralsHeroSect";
import Footer from "../../components/Footer";
import ReferralsSectOne from "./ReferralsSectOne";

const Referrals = () => {
  return (
    <>
      <Meta
        title={"Referrals | ProVision Property"}
        description={
          "Referrals page of Provision Property Management and Support Services"
        }
        keywords={
          "referrals, provision property management referrals page, provision property management and support service referrals page, provision support service referrals page"
        }
      />
      <Navbar />
      <Sidebar />
      <ReferralsHeroSect />
      <ReferralsSectOne />
      <Footer />
    </>
  );
};

export default Referrals;
