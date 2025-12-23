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
        title={"Referrals | ProVision Support Services CIC"}
        description={"Referrals page of ProVision Support Services CICs"}
        keywords={
          "referrals, ProVision Support Services CIC referrals page, ProVision Support Services CIC referrals page, provision support service referrals page"
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
