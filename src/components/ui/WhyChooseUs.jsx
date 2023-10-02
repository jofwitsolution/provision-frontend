import React from "react";
import styles from "../../styles/tailwind";
import Accordion from "./Accordion";
import { reasonsToChooseProVision } from "../../data/content";
import { images } from "../../constants/images";

const WhyChooseUs = () => {
  return (
    <section>
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="flex gap-[1rem] items-center">
          <hr className="inline-block border-2 border-grey-100 w-[6rem]" />
          <h3 className="font-[500]">WHY CHOOSE US</h3>
        </div>
        <div>
          <h3 className="font-[700] text-[2rem] leading-[2rem]">
            The "ProVision" Difference
          </h3>
        </div>
        <div className="lg:w-[60%] my-[1.2rem]">
          <p className="text-grey-100">
            Our personalized care, commitment to individual goals, and a clear
            path to independent living set us apart. With us, you're not just a
            resident; you're on a journey towards self-sufficiency and
            well-being.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[2rem] justify-between">
          <div className="md:w-[40rem] lg:w-[45%]">
            <Accordion items={reasonsToChooseProVision} />
          </div>
          <div className="lg:w-[40%]">
            <div className="relative">
              <img
                src={images.people_5}
                alt="provision 2"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
