import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({
  title = "ProVision Support Services CIC",
  description = `
  Celebrate Your Stay, Elevate Your Experience, and Empower Your Investment 
  with ProVision. Discover Distinctive Accommodations Tailored to You, 
  Where Sustainability Meets Unforgettable Memories. Your Journey Starts Here.
  `,
  keywords = "provision, ProVision Support Services CIC, property, support service, ProVision Support Services CIC",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default Meta;
