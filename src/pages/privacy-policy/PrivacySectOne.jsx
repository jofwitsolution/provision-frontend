import React from "react";
import styles from "../../styles/tailwind";

const PrivacySectOne = () => {
  return (
    <section
      className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
    >
      <div>
        <div className="sm:container mx-auto sm:px-4">
          <h1 className="text-3xl font-bold mb-4 text-center xs:text-left">
            Privacy Policy
          </h1>
          <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
            <p className="mb-4">
              At ProVision Support Service, we are committed to ensuring the
              privacy and security of your personal data. We are dedicated to
              complying with the General Data Protection Regulation (GDPR) and
              informing you about the ways we collect, use, and protect your
              data. By engaging with our services, you consent to our data
              processing practices as outlined in this privacy policy.
            </p>
            {/* Add all the sections from your terms and conditions here */}
            {/* For example: */}
            <h2 className="text-xl font-semibold mb-2">
              1. Data Collection and Storage
            </h2>
            <p className="mb-4">
              To provide you with support, we record details of your support.
              These details may include your personal and special category data,
              as defined by GDPR.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              2. Data Usage and Sharing
            </h2>
            <div className="mb-4 pl-[2rem]">
              <ul className="list-[lower-alpha]">
                <li>
                  <span className="font-[500]">
                    Permission to Store Your Data:
                  </span>{" "}
                  By signing our consent form, you provide your consent for us
                  to process your data, including personal and special category
                  data. Your support details will be securely stored in a shared
                  electronic case management system accessed by ProVision
                  Support Service members. Paper copies of your data may also be
                  stored securely.
                </li>
                <li>
                  <span className="font-[500]">
                    Permission to Share Your Data with Other Organizations:
                  </span>{" "}
                  While we treat all information you share with us
                  confidentially, there may be instances where we suggest that
                  you seek advice from other organizations better equipped to
                  address your needs. With your consent, we may:
                  <ul className="list-disc ml-[0.5rem]">
                    <li>Refer you to other third-party services.</li>
                    <li>
                      Make appointments with other third-party services on your
                      behalf.
                    </li>
                    <li>
                      Share your personal information with other third-party
                      services so they have initial information about you and
                      your possible issues.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold mb-2">
              3. Personal and Special Category Data
            </h2>
            <p className="mb-4">
              Personal data includes information that can be used to identify
              you, such as your name, date of birth, address, telephone number,
              etc. Special category data includes information related to racial
              or ethnic origin, religious beliefs, health, sexuality or sex
              life, offences and/or convictions.
            </p>

            <h2 className="text-xl font-semibold mb-2">4. Data Storage</h2>
            <p className="mb-4">
              Your support details will be stored in a shared electronic case
              management system accessed by ProVision Support Service members
              and their contractual partners. Your information may also be
              securely stored in paper files held by ProVision Support Service
              or its contractual partners.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              5. Data Controller and Data Processor
            </h2>
            <div className="mb-4 pl-[2rem]">
              <ul className="list-disc">
                <li>
                  A Data Controller is responsible for ensuring that your data
                  is processed according to the law, including accuracy and
                  security. Typically, the Data Controller is the funder of the
                  service you receive.
                </li>
                <li>
                  ProVision Support Service, for GDPR purposes, acts as the Data
                  Processor on behalf of the Commissioner of the service.
                </li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold mb-2">
              6. Consent Withdrawal
            </h2>
            <p className="mb-4">
              You have the right to withhold or withdraw your consent. However,
              this may affect our ability to provide you with support. We will
              work with your Data Controller to find alternative solutions that
              align with our contractual obligations.
            </p>

            <h2 className="text-xl font-semibold mb-2">7. Data Sharing</h2>
            <p className="mb-4">
              We will not share your information with any third party without
              your explicit consent, except where required by law. Both
              ProVision Support Service and our contractual partners have
              individual complaints policies, and you may request further
              details.
            </p>

            {/* Repeat this structure for each section of your terms and conditions */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySectOne;
