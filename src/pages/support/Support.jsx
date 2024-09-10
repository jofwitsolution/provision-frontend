import React, { useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";
import SupportHeroSect from "./SupportHeroSect";
import SupportSectOne from "./SupportSectOne";
import SupportSectTwo from "./SupportSectTwo";
import JoinUs from "../../components/ui/JoinUs";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta title={"Support | Provision Support Services CIC"} />
      <Navbar />
      <Sidebar />
      <SupportHeroSect />
      <SupportSectOne />
      <SupportSectTwo />
      <JoinUs />
      <Footer />
    </>
  );
};

export default Support;
