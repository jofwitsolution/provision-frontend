import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/tailwind";
import { images } from "../../constants/images";
import { fadeIn } from "../../utils/motion";

const SupportSectOne = () => {
  return (
    <section className={`${styles.maxWidth} bg-grey-50`}>
      <div className="flex flex-col lg:flex-row gap-[2.5rem] pb-3 lg:pb-0">
        <div className="lg:w-[50%]">
          <img src={images.people_7} alt="Happy home" />
        </div>
        <div className="lg:w-[45%] lg:self-center">
          <h3 className="text-[1.5rem] mb-[1rem] font-[600]">
            Empowering Your Journey
          </h3>
          <motion.p
            variants={fadeIn("down", "easeOut", 1, 1)}
            className="leading-[2rem]"
          >
            We are dedicated to enhancing individuals' capacity to maintain a
            tenancy and preparing them for self-sufficient living. Our
            comprehensive support services are designed to guide you through
            this transformative journey, empowering you every step of the way.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SupportSectOne;
