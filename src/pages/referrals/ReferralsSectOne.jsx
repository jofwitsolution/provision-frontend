import React from "react";
import styles from "../../styles/tailwind";
import ReferSomeone from "../../components/forms/ReferSomeone";

const ReferralsSectOne = () => {
  return (
    <section className={`${styles.paddingBottom}`}>
      <div
        className={`bg-grey-50 ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className={styles.maxWidth}>
          <div>
            <h2 className="text-[1.5rem] mb-[1rem] font-bold">Refer Someone</h2>
            <p>
              If you're looking to refer someone to our service, please complete
              the referral form on this page.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="max-w-[60rem] mb-[2rem]">
          <p className="mb-[1rem]">
            This form is safe and secure. The information you provide is
            confidential and protected by encryption. We will only share
            information with professionals outside of Provision Support Services
            if we think someone is at risk of harm.
          </p>
          <p className="mb-[1rem]">
            We will store this referral for a short time within the secure
            Formstack database. We will then keep it in our own storage. Only
            people who need to see the referral information will have access.
          </p>
          <p className="mb-[1rem]">
            Please make sure you complete any questions marked with an asterisk
            (*) as we need these details to complete the next steps of your
            referral. You must have consent from your patient or client to give
            their details.
          </p>
        </div>
        <ReferSomeone />
      </div>
    </section>
  );
};

export default ReferralsSectOne;
