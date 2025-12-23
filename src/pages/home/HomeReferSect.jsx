import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants/images";
import styles from "../../styles/tailwind";

const HomeReferSect = () => {
  return (
    <section className="bg-gray-50">
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/2 px-3 py-4 md:p-12">
            <h3 className="text-sm font-semibold text-primary uppercase mb-2">
              ProVision Support Services CIC
            </h3>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Refer someone who needs support — we’ll take it from here
            </h2>

            <p className="text-gray-700 mb-6 max-w-xl">
              If you know someone who could benefit from ProVision’s
              compassionate community support — for housing, wellbeing, or
              practical assistance — you can refer them directly and our
              specialist team will get in touch. Referrals are confidential and
              focused on connecting people to real, local support.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 mt-2 bg-primary rounded-full" />
                <div className="text-gray-700">
                  We contact the person with care
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 mt-2 bg-primary rounded-full" />
                <div className="text-gray-700">
                  Support is tailored to their needs
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 mt-2 bg-primary rounded-full" />
                <div className="text-gray-700">
                  Referrals are handled sensitively
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/referrals"
                className="inline-flex items-center px-5 py-3 bg-primary hover:bg-primaryAlt text-white rounded-md shadow-sm text-sm font-medium"
              >
                Refer someone
              </Link>

              <Link
                to="/contact"
                className="text-sm text-gray-700 hover:underline"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <img
              src={images.referral_1}
              alt="Support conversation"
              className="w-full h-72 md:h-full object-cover"
            />

            <blockquote className="absolute left-6 bottom-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md max-w-sm">
              <p className="text-sm text-gray-800">
                “Thank you for connecting us — the team were so helpful.”
              </p>
              <footer className="text-xs text-gray-600 mt-2">
                — Service user
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReferSect;
