import React, { useState } from "react";
import styles from "../../styles/tailwind";
import { faqs } from "../../constants/faqs";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === openIndex) {
      setOpenIndex(null); // Close the clicked FAQ
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="sm:container mx-auto sm:p-4 mt-4">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <span
                className={`transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } transition-transform duration-300 w-4 h-4 text-primary`}
              >
                &#9660;
              </span>
            </div>
            {openIndex === index && <p className="mt-4">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQs = () => {
  return (
    <section>
      <div
        className={`${styles.maxWidth} ${styles.paddingTop} ${styles.paddingBottom}`}
      >
        <div className="flex gap-[1rem] items-center">
          <hr className="inline-block border-2 border-grey-100 w-[6rem]" />
          <h3 className="font-[500]">FAQs</h3>
        </div>
        <div>
          <h3 className="font-[700] text-[2rem] leading-[2rem]">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="max-w-[50rem]">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
