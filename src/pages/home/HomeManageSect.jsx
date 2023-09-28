import React from "react";
import styles from "../../styles/tailwind";
import { Link } from "react-router-dom";
import { images } from "../../constants/images";

const HomeManageSect = () => {
  return (
    <section className="bg-grey-50">
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-[2.5rem] justify-between">
          <div className="lg:w-[45%]">
            <h3 className="text-[1.5rem] mb-[1rem] font-[600]">Communities</h3>
            <p className="leading-[2rem]">
              Our community development is driven by our core values, including
              integrity, transparency, and a deep commitment to the well-being
              of the communities we serve. Our goal is to create positive,
              lasting change that improves the lives of residents and
              contributes to the growth and vitality of the community as a
              whole.
            </p>
            <div className="mt-[1.9rem] text-white">
              <Link to="/communities" className={`${styles.buttonOne}`}>
                Learn more
              </Link>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <img src={images.people_2_small} alt="Find a home" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeManageSect;
