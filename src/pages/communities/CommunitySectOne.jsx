import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/tailwind";
import { images } from "../../constants/images";
import { fadeIn } from "../../utils/motion";

const CommunitySectOne = () => {
  return (
    <section className={`${styles.maxWidth} bg-grey-50`}>
      <div className="flex flex-col lg:flex-row gap-[2.5rem] pb-3 lg:pb-0">
        <div className="lg:w-[50%]">
          <img src={images.community_1} alt="Community" />
        </div>
        <div className="lg:w-[45%] lg:self-center">
          <h3 className="text-[1.5rem] mb-[1rem] font-[600]">
            Fostering Inclusivity and Connection
          </h3>
          <motion.p
            variants={fadeIn("down", "easeOut", 1, 1)}
            className="leading-[2rem]"
          >
            We are dedicated to creating a positive and nurturing environment
            that goes beyond just accommodation. Our mission is to build
            communities that empower individuals and promote well-being,
            connection, and sustainability.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySectOne;
