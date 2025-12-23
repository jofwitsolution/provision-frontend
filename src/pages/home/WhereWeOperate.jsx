import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants/images";
import styles from "../../styles/tailwind";

const WhereWeOperate = () => {
  return (
    <section className="bg-indigo-50">
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 px-3 py-4 md:p-12">
            <h4 className="text-sm font-semibold text-primary uppercase mb-2">
              Coventry Supported Living Services
            </h4>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Where We Operate
            </h2>

            <p className="text-gray-700 mb-6 max-w-xl">
              ProVision Support Services CIC provides supported living and
              person-centred care services across Coventry City. We work closely
              with individuals, families, and local partners to deliver safe,
              inclusive, and high-quality support that meets individual needs.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 mb-6 max-w-md">
              <li className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-primary rounded-full" />
                Person-centred care
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-primary rounded-full" />
                Local partnerships
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-primary rounded-full" />
                Safe & inclusive
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-primary rounded-full" />
                High-quality practice
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-3 bg-primary hover:bg-primaryAlt text-white rounded-md shadow-sm text-sm font-medium"
              >
                Get Support
              </Link>
              <Link to="/referrals" className="text-primary hover:underline">
                Refer someone
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full h-56 md:h-72 lg:h-auto">
            <img
              src={images.coventry}
              alt="Coventry community support"
              className="w-full h-full object-cover"
            />

            <div className="absolute left-6 top-6 bg-white/90 px-3 py-2 rounded-md shadow-sm">
              <div className="text-xs text-gray-600">Operating area</div>
              <div className="text-sm font-semibold text-gray-900">
                Coventry City
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeOperate;
