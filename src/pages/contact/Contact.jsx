import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import ContactHeroSect from "./ContactHeroSect";
import Sidebar from "../../components/navigation/Sidebar";
import Navbar from "../../components/navigation/Navbar";
import ContactSectOne from "./ContactSectOne";
import ContactSectTwo from "./ContactSectTwo";
import Meta from "../../components/Meta";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title={"Contact Us | ProVision Support Services CIC"}
        description={"Contact ProVision Support Services CICs"}
        keywords={
          "contact, ProVision Support Services CIC contact page, ProVision Support Services CIC contact page, provision support service contact page"
        }
      />
      <Navbar />
      <Sidebar />
      <ContactHeroSect />
      <ContactSectOne />
      <ContactSectTwo />
      <Footer />
    </>
  );
};

export default Contact;
