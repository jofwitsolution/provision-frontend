import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/tailwind";
import { images } from "../../constants/images";
import { fadeIn } from "../../utils/motion";

const AccommodSectTwo = () => {
  return (
    <section className="mx-[16px] xl:mx-0">
      <div
        className={`${styles.maxWidth} mt-[4rem] py-[2rem] sm:py-[4rem] rounded-lg bg-grey-50`}
      >
        <div className="flex flex-col lg:flex-row gap-[2.5rem]">
          <div className="lg:w-[50%]">
            <img src={images.house_2} alt="Happy home" />
          </div>
          <div className="lg:w-[45%] lg:self-center">
            <h3 className="text-[1.5rem] mb-[1rem] font-[600]">
              Our Accommodations
            </h3>
            <motion.p
              variants={fadeIn("down", "easeOut", 1, 1)}
              className="leading-[2rem] mb-2"
            >
              Our strategically located accommodations are designed to meet the
              unique requirements of our residents. Embracing communal living,
              our residents share essential facilities such as kitchens and
              bathrooms while enjoying individual bedrooms and well-maintained
              communal spaces. This collective responsibility not only ensures
              affordable living but also fosters a sense of community and mutual
              support.
            </motion.p>
            <motion.p
              variants={fadeIn("down", "easeOut", 1, 1)}
              className="leading-[2rem]"
            >
              To make this possible, residents contribute a monthly personal
              service charge, with the remaining portion of the rent covered by
              Housing Benefit. We believe that this shared financial commitment
              is a vital part of maintaining a stable and supportive living
              environment.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodSectTwo;
