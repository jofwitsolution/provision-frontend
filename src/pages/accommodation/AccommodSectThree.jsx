import React from "react";
import styles from "../../styles/tailwind";

const AccommodSectThree = () => {
  return (
    <section
      className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
    >
      <div className="flex flex-wrap justify-center gap-[2rem]">
        <div className="lg:w-[30rem] px-[1.5rem] py-[2rem] rounded-xl bg-secondary hover:bg-primaryAlt text-white">
          <h3 className="text-[1.4rem] mb-[1rem] font-[600]">
            Your Committment
          </h3>
          <p className="text-[0.95rem]">
            Adherence to the terms outlined in the License Agreement and our
            House Rules is imperative for the continuity of our tenancy
            agreement. Deviations from these standards may compromise the
            tenancy agreement. However, it's not just about rules; it's about
            the journey we embark on together. We expect our residents to commit
            to a minimum tenure of nine months, during which we work
            collaboratively to help you achieve the objectives set forth in your
            personalized Support Plan.
          </p>
        </div>
        <div className="lg:w-[30rem] px-[2rem] py-[2rem] rounded-xl bg-secondary hover:bg-primaryAlt text-white">
          <h3 className="text-[1.4rem] mb-[1rem] font-[600]">
            Our Promise to You
          </h3>
          <p className="text-[0.95rem]">
            Upon successful completion of the Support Plan and reaching the
            nine-month milestone, Provision Property Management and Support
            Service will extend our support to secure independent accommodation.
            This may encompass private rental arrangements or properties
            administered by the local council. We are committed to your
            successful transition, ensuring that you continue to enjoy stable
            and independent living. We understand that everyone's path is
            unique, and we're here to guide you every step of the way.
          </p>
        </div>
        <div className="lg:w-[30rem] px-[2rem] py-[2rem] rounded-xl bg-secondary hover:bg-primaryAlt text-white">
          <h3 className="text-[1.4rem] mb-[1rem] font-[600]">
            Financial Support
          </h3>
          <p className="text-[0.95rem]">
            We acknowledge that financial challenges can pose barriers to
            accessing suitable housing. If you face such challenges, your
            dedicated Support Worker will collaborate with you to explore viable
            strategies for resolution, ensuring that you have the financial
            support you need to thrive.
          </p>
        </div>
        <div className="lg:w-[30rem] px-[2rem] py-[2rem] rounded-xl bg-secondary hover:bg-primaryAlt text-white">
          <h3 className="text-[1.4rem] mb-[1rem] font-[600]">
            We're Here for You
          </h3>
          <p className="text-[0.95rem]">
            At Provision Accommodation, we're not just a landlord; we're your
            partner on the journey to self-sufficient living. We're committed to
            providing more than just a roof over your head. We're here to create
            a supportive environment that empowers you to achieve your goals,
            make lasting memories, and embrace a brighter future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccommodSectThree;
