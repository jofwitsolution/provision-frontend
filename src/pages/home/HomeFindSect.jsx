import React from "react";
import styles from "../../styles/tailwind";
import { Link } from "react-router-dom";
import { images } from "../../constants/images";

const HomeFindSect = () => {
  return (
    <section className="bg-grey-50">
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-[2.5rem] justify-between">
          <div className="lg:w-[45%]">
            <h3 className="text-[1.5rem] mb-[1rem] font-[600]">
              Our Accommodation
            </h3>
            <p className="leading-[2rem]">
              We provide outstanding guest experiences by offering
              well-maintained properties, attentive customer service, and local
              recommendations.
            </p>
            <div className="mt-[1.9rem] text-white">
              <Link to="/accommodation" className={`${styles.buttonOne}`}>
                Learn more
              </Link>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <img src={images.house_1_small} alt="Find a home" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFindSect;
