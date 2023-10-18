import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/tailwind";
import { Link } from "react-router-dom";
import { images } from "../../constants/images";

const HomeHeroSection = () => {
  return (
    <section className={`${styles.navbarGap}`}>
      <div className={`${styles.homeHero} items-center hidden lg:flex`}>
        <motion.div
          initial={{ visibility: "hidden" }}
          whileInView={{ visibility: "visible", opacity: [0, 1], x: [-60, 0] }}
          transition={{ duration: 2, type: "tween" }}
          className="ml-[10%] p-[1.9rem] shadow rounded-sm w-[31.5rem] bg-white"
        >
          <h1 className="text-[2.9rem] font-[700] text-primary">ProVision</h1>
          <p className="font-serif text-[1.1rem]">
            Our core ethos centers on the well-being of individuals. This is
            evident in our dedication to providing safe, high-quality homes and
            supporting people in their journey toward greater independence.
          </p>
          <div className="mt-[1.9rem] text-white">
            <Link to="/about" className={`${styles.buttonOne}`}>
              Discover more
            </Link>
          </div>
        </motion.div>
      </div>
      <div className={`${styles.maxWidth} py-[1.9rem] lg:hidden`}>
        <h1 className="text-[2.5rem] font-[700] text-primary">ProVision</h1>
        <p className="font-serif text-[1.1rem]">
          Our core ethos centers on the well-being of individuals. This is
          evident in our dedication to providing safe, high-quality homes and
          supporting people in their journey toward greater independence.
        </p>
        <div className="mt-[1.9rem] text-white">
          <Link to="/about" className={`${styles.buttonOne}`}>
            Discover more
          </Link>
        </div>
      </div>
      <div className={`lg:hidden`}>
        <img
          src={images.home_hero_big}
          alt="Home hero"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HomeHeroSection;
