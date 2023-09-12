import React from "react";
import styles from "../../styles/tailwind";
import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  return (
    <section className={`${styles.navbarGap}`}>
      <div className={`${styles.homeHero} items-center hidden lg:flex`}>
        <div className="ml-[10%] p-[30px] shadow rounded-sm w-[500px] bg-white">
          <h1 className="text-[40px] font-[700] text-primary">ProVision</h1>
          <p className="font-serif text-[18px]">
            Our core ethos centers on the well-being of individuals. This is
            evident in our dedication to providing safe, high-quality homes and
            supporting people in their journey toward greater independence.
          </p>
          <div className="mt-[30px] text-white">
            <Link to="/about" className={`${styles.buttonOne}`}>
              Discover more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
