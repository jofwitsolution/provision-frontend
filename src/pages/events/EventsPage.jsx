import React from "react";
import Meta from "../../components/Meta";
import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";
import Footer from "../../components/Footer";

import EventHero from "./EventHero";
import EventList from "./EventList";

const EventsPage = () => {
  return (
    <>
      <Meta
        title={"Events | ProVision Support Services CIC"}
        description={
          "Stay updated with the latest events and activities at ProVision Support Services CIC. Join us in our community initiatives and support programs."
        }
        keywords={
          "events, community initiatives, support programs, ProVision Support Services CIC"
        }
      />
      <Navbar />
      <Sidebar />
      <EventHero />
      <EventList />
      <Footer />
    </>
  );
};

export default EventsPage;
