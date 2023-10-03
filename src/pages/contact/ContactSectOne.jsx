import React from "react";
import styles from "../../styles/tailwind";

const ContactSectOne = () => {
  return (
    <section
      className={`bg-grey-50 ${styles.paddingTop} ${styles.paddingBottom}`}
    >
      <div className={"ml-[6%]"}>
        <div className="w-full flex gap-[2rem]">
          <div className="flex flex-col md:flex-row gap-[2rem]">
            <div className="">
              <h2 className="font-bold text-[1.5rem] mb-[1.4rem]">
                Get In Touch
              </h2>
              <div className="mb-[1.8rem]">
                <h6 className="font-bold text-[0.9rem]">Phone</h6>
                <a
                  href="tel: +44 7581 467406"
                  className="block text-[1rem] text-grey-200"
                >
                  +44 7581 467406
                </a>
                <a
                  href="tel: +44 7828 887031"
                  className="block text-[1rem] text-grey-200"
                >
                  +44 7828 887031
                </a>
              </div>
              <div>
                <h6 className="font-bold text-[0.9rem]">Hours</h6>
                <span className="block text-[1rem] text-grey-200">
                  Mon – Fri — 8:00am – 5:30pm
                </span>
                <span className="block text-[1rem] text-grey-200">
                  Sat – Sun — By appointment
                </span>
              </div>
            </div>
            <div className="">
              <h2 className="font-bold text-[1.5rem] mb-[1.4rem]">
                Address and Email
              </h2>
              <div className="mb-[1.8rem]">
                <h6 className="font-bold text-[0.9rem]">Address</h6>
                <address className="text-[1rem] text-grey-200">
                  <span className="block">31 Hazelville Road</span>
                  <span className="block">B28 9QF</span>
                  <span className="block">Birmingham</span>
                </address>
              </div>
              <div>
                <h6 className="font-bold text-[0.9rem]">Email</h6>
                <a
                  href="mailto: info@provisionsupportservice.co.uk"
                  className="block text-[1rem] text-grey-200 underline"
                >
                  info@provisionsupportservice.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectOne;
