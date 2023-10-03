import React from "react";
import Footer from "../../components/Footer";
import ContactHeroSect from "./ContactHeroSect";
import Sidebar from "../../components/navigation/Sidebar";
import Navbar from "../../components/navigation/Navbar";
import ContactSectOne from "./ContactSectOne";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ContactHeroSect />
      <ContactSectOne />
      <Footer />
    </>
  );
};

export default Contact;
