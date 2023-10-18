import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/tailwind";
import { images } from "../../constants/images";
import { fadeIn } from "../../utils/motion";

const AccommodSectOne = () => {
  return (
    <section className={`${styles.maxWidth} bg-grey-50`}>
      <div className="flex flex-col lg:flex-row gap-[2.5rem]">
        <div className="lg:w-[50%]">
          <img src={images.people_8} alt="Happy home" />
        </div>
        <div className="lg:w-[45%] lg:self-center">
          <motion.p
            variants={fadeIn("down", "easeOut", 1, 1)}
            className="leading-[2rem]"
          >
            We take great pride in offering distinctive and well-maintained
            accommodations that cater to a diverse range of needs and
            preferences.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AccommodSectOne;
