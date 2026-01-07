import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({
  title = "ProVision Support Services CIC",
  description = `
    ProVision Support Services CIC is dedicated to providing exceptional accommodation and support services. 
    We specialize in sustainable accommodations that empower individuals and communities. Explore our range of services and
    discover how we can assist you in finding the perfect property solution.
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
