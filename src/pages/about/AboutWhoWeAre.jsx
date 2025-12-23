import React from "react";
import styles from "../../styles/tailwind";
import { images } from "../../constants/images";

const AboutWhoWeAre = () => {
  return (
    <section className="bg-white">
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-1 bg-primary rounded" />
              <h4 className="text-sm font-semibold text-gray-600">About Us</h4>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              ProVision Support Services CIC
            </h2>

            <p className="text-gray-700 mb-4 max-w-xl">
              ProVision Support Services CIC is a community-interest
              organisation providing inclusive, person-centred supported living
              solutions. We support individuals with diverse needs to live
              safely, independently, and with dignity in accommodation tailored
              to their preferences and goals.
            </p>

            <p className="text-gray-700 mb-6 max-w-xl">
              Our services are built around choice, wellbeing, and community
              inclusion, delivered by a dedicated team committed to high
              standards of care and CQC principles. At ProVision Support
              Services CIC, we empower people to live fulfilling and meaningful
              lives.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="/contact"
                className="inline-block px-5 py-3 bg-primary hover:bg-primaryAlt text-white rounded-md shadow-sm"
              >
                Get in touch
              </a>
              <a href="/referrals" className="text-primary hover:underline">
                Refer someone
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-xl relative">
              <img
                src={images.support_worker_1}
                alt="Support and community"
                className="w-full rounded-2xl shadow-lg object-cover h-72 md:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
