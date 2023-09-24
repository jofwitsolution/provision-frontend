import React from "react";
import SearchBox from "../../components/forms/SearchBox";
import styles from "../../styles/tailwind";

const HomeSearchSect = () => {
  return (
    <section className="">
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <h2 className="text-[2rem] font-bold mb-[1rem] text-center">
          Find a Home
        </h2>
        <SearchBox />
      </div>
    </section>
  );
};

export default HomeSearchSect;
