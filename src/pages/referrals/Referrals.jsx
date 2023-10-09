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
      <Meta title={"Referrals | ProVision Property"} />
      <Navbar />
      <Sidebar />
      <ReferralsHeroSect />
      <ReferralsSectOne />
      <Footer />
    </>
  );
};

export default Referrals;
