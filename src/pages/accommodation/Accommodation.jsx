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
import JoinUs from "../../components/ui/JoinUs";

const Accommodation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title={"Accommodation | Provision Support Services CIC"}
        description={"Provision Support Services CICs"}
        keywords={
          "accommodation, Provision Support Services CIC about page, Provision Support Services CIC about page, provision support service about page"
        }
      />
      <Navbar />
      <Sidebar />
      <AccommodHeroSect />
      <AccommodSectOne />
      <AccommodSectTwo />
      <AccommodSectThree />
      <JoinUs />
      <Footer />
    </>
  );
};

export default Accommodation;
