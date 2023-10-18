import React, { useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";
import AccommodHeroSect from "./AccommodHeroSect";
import AccommodSectOne from "./AccommodSectOne";
import AccommodSectTwo from "./AccommodSectTwo";
import AccommodSectThree from "./AccommodSectThree";

const Accommodation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta title={"Accommodation | ProVision Property"} />
      <Navbar />
      <Sidebar />
      <AccommodHeroSect />
      <AccommodSectOne />
      <AccommodSectTwo />
      <AccommodSectThree />
      <Footer />
    </>
  );
};

export default Accommodation;
