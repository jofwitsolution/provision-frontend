import React from "react";
import styles from "../../styles/tailwind";
import { images } from "../../constants/images";
import BouncingImage from "../../components/BouncingImage";

const AboutWhoWeAre = () => {
  return (
    <section>
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="flex flex-col lg:flex-row gap-[2rem] items-center justify-between">
          <div className="md:w-[40rem] lg:w-[45%]">
            <div className="flex gap-[1rem] items-center">
              <hr className="inline-block border-2 border-grey-100 w-[6rem]" />
              <h3 className="font-[500]">WHO WE ARE</h3>
            </div>
            <div>
              <h3 className="font-[700] text-[2rem] leading-[2rem]">
                Provision Support Services
              </h3>
            </div>
            <div className="mt-[2rem]">
              <p className="text-grey-200">
                At Provision Support Services CIC, we are more than just a
                service provider; we are champions of inclusive and supported
                living experiences. Our mission is to empower individuals by
                connecting them with distinctive accommodations tailored to
                their unique needs and preferences.
              </p>
              <p className="text-grey-200 mt-[1rem]">
                With unwavering dedication, we unlock the full potential of
                property investments for owners, while fostering a profound
                sense of belonging, sustainability, and accessibility in every
                stay, no matter who you are, what your needs are, or how long
                you'll be staying.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <div className="relative">
              {/* <img
                src={images.people_6}
                alt="provision 2"
                className="rounded-full md:max-w-[25rem]"
              /> */}
              <BouncingImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
