import React from "react";
import styles from "../../styles/tailwind";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const ReferralsHeroSect = () => {
  return (
    <section className={`${styles.navbarGap}`}>
      <div className={`${styles.aboutHero}`}>
        <div
          className={`${styles.maxWidth} h-full flex items-center text-white`}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center w-full">
            <h1 className="text-[2.2rem] md:text-[2.9rem] font-[500]">
              Referrals
            </h1>
            <div className="flex gap-[0.4rem] items-center text-[0.8rem]">
              <Link to="/" className="font-bold">
                HOME
              </Link>
              <span className="text-[0.8rem] text-grey-50">
                <AiOutlineRight />
              </span>
              <span className="text-grey-50">REFERRALS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralsHeroSect;
