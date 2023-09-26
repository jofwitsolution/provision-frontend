import React, { useState } from "react";
import classNames from "classnames";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const openStyle = isOpen ? "block h-max" : "hidden h-0";

  return (
    <div className="shadow">
      <div
        className={classNames("shadow", {
          "bg-secondary text-white": isOpen,
        })}
      >
        <button
          className="flex items-center justify-between p-4 w-full focus:outline-none"
          onClick={toggleAccordion}
        >
          <p className="text-lg font-semibold">{title}</p>
          <svg
            className={classNames("w-6 h-6", {
              "transform rotate-180": isOpen,
            })}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16.59 8.59L12 13.17l-4.59-4.58L6 9l6 6 6-6 1.41-1.42z"
            />
          </svg>
        </button>
      </div>

      <div
        className={`p-4 text-gray-600 text-[1.1rem] transition-all duration-[2000] ${openStyle}`}
      >
        {content}
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
