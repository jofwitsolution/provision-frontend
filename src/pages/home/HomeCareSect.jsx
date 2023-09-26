import React from "react";
import styles from "../../styles/tailwind";
import { Link } from "react-router-dom";
import { images } from "../../constants/images";

const HomeCareSect = () => {
  return (
    <section className="">
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-[2.5rem] justify-between">
          <div className="lg:w-[50%]">
            <img src={images.people_1_small} alt="Find a home" className="" />
          </div>
          <div className="lg:w-[45%]">
            <h3 className="text-[1.5rem] leading-[2rem] mb-[1rem] font-[600]">
              Our Care and Support Service
            </h3>
            <p className="leading-[2rem]">
              We provide an extensive array of caring and supportive services,
              encompassing residential care, supported living, extra care
              schemes, community support, and in-home care options.
            </p>
            <div className="mt-[1.9rem] text-white">
              <Link to="/care-and-support" className={`${styles.buttonOne}`}>
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareSect;
