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
            <h3 className="text-[1.5rem] mb-[1rem] font-[600]">
              Home Management
            </h3>
            <p className="leading-[2rem]">
              Take charge of your home with comprehensive information on home
              maintenance, repair, rent, service charges, as well as details
              about your tenancy agreement or lease.
            </p>
            <div className="mt-[1.9rem] text-white">
              <Link to="/manage-your-home" className={`${styles.buttonOne}`}>
                Manage your home
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
