import React from "react";
import styles from "../../styles/tailwind";

const SupportSectTwo = () => {
  return (
    <section
      className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
    >
      <div className="flex flex-wrap justify-center gap-[2rem]">
        <div className="lg:w-[20rem] px-[1.5rem] py-[2rem] rounded-xl bg-secondary hover:bg-primaryAlt text-white">
          <h3 className="text-[1.4rem] mb-[1rem] font-[600]">
            Financial Guidance
          </h3>
          <p className="text-[0.95rem]">
            Our experienced team offers expert guidance in budgeting and
            financial management, with a focus on addressing any existing debts.
            We work closely with you to build financial stability and equip you
            with the skills and knowledge to make informed financial decisions.
          </p>
        </div>
        <div className="lg:w-[20rem] px-[2rem] py-[2rem] rounded-xl bg-secondary hover:bg-primaryAlt text-white">
          <h3 className="text-[1.4rem] mb-[1rem] font-[600]">
            Access to Specialized Service
          </h3>
          <p className="text-[0.95rem]">
            Navigating the support landscape can be challenging, which is why we
            provide assistance in accessing specialized services related to
            substance abuse, mental health, and other critical areas. Your
            well-being is our priority, and we're here to ensure you receive the
            support you need.
          </p>
        </div>
        <div className="lg:w-[20rem] px-[2rem] py-[2rem] rounded-xl bg-secondary hover:bg-primaryAlt text-white">
          <h3 className="text-[1.4rem] mb-[1rem] font-[600]">
            Maintenance Practices
          </h3>
          <p className="text-[0.95rem]">
            Fostering tenancy maintenance practices is crucial for long-term
            stability. We offer guidance and support in keeping your living
            space well-maintained, ensuring a safe and comfortable environment
            for all residents.
          </p>
        </div>
        <div className="lg:w-[20rem] px-[2rem] py-[2rem] rounded-xl bg-secondary hover:bg-primaryAlt text-white">
          <h3 className="text-[1.4rem] mb-[1rem] font-[600]">
            Overcoming Financial Barriers
          </h3>
          <p className="text-[0.95rem]">
            Should financial indebtedness pose a barrier to accessing suitable
            housing, your Support Worker will collaborate with you to explore
            viable strategies for resolution. We are dedicated to helping you
            overcome obstacles and achieve financial stability.
          </p>
        </div>
        <div className="lg:w-[20rem] px-[2rem] py-[2rem] rounded-xl bg-secondary hover:bg-primaryAlt text-white">
          <h3 className="text-[1.4rem] mb-[1rem] font-[600]">
            Opportunities for Growth
          </h3>
          <p className="text-[0.95rem]">
            ProVision Support is more than just a service; it's an opportunity
            for growth. We enable access to opportunities in employment,
            education/training, or voluntary service, helping you build a
            brighter future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportSectTwo;
