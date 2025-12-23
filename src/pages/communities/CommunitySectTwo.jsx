import React from "react";
import { images } from "../../constants/images";
import styles from "../../styles/tailwind";

const CommunitySectTwo = () => {
  return (
    <section
      className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
    >
      <div className="md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 md:gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={images.community_2} alt="Mountain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Community Integration</div>
            <p className="text-gray-700 text-base">
              Expanding your social networks is a key part of our support
              system. We're here to enhance your community integration, ensuring
              you feel a sense of belonging and connection within your new
              living environment.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={images.community_3} alt="River" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sustainable Living</div>
            <p className="text-gray-700 text-base">
              Our commitment to sustainability is unwavering. We are dedicated
              to environmental responsibility, implementing practices that
              minimize our impact and encourage responsible travel. ProVision
              Communities are designed with eco-friendly practices in mind,
              ensuring that we do our part to protect the environment and the
              communities we serve.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={images.community_4} alt="River" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Community-Centric Living
            </div>
            <p className="text-gray-700 text-base">
              Our strategically located accommodations are designed to foster
              communal living, where residents share essential facilities such
              as kitchens and bathrooms. This collective approach not only
              promotes affordability but also creates a strong sense of
              community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySectTwo;
