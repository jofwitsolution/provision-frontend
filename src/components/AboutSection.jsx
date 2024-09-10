import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Us
        </motion.h2>
        <motion.p className="text-lg mb-8" variants={fadeInUp}>
          At Provision Support Services CIC, our mission is to provide inclusive
          and supported living experiences tailored to the unique needs and
          preferences of our clients.
        </motion.p>
        <motion.p className="text-lg mb-8" variants={fadeInUp}>
          We are committed to fostering a holistic sense of well-being, enabling
          access to education, employment, or voluntary service opportunities,
          and expanding social networks for enhanced community integration.
        </motion.p>
        <motion.p className="text-lg" variants={fadeInUp}>
          Our deep commitment to sustainability and responsible tourism guides
          our efforts to minimize our impact on the environment and promote
          eco-friendly practices within the communities we serve.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
