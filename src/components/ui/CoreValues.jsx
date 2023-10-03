import React from "react";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { images } from "../../constants/images";
import { coreValues } from "../../data/content";
import styles from "../../styles/tailwind";

const CoreValuesCard = ({ coreValue }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        borderBottom: "4px solid #964B00",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: "#E6DEDD" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={images.primary_logo}
            alt={"image"}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="text-white">
        <h3 className="text-[1.2rem] font-bold mb-2">{coreValue.title}</h3>
        <p className="text-grey-400">{coreValue.content}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const CoreValues = () => {
  return (
    <div className={`${styles.paddingTop} ${styles.paddingBottom}`}>
      <h2 className="text-[2rem] font-bold md:mb-[1rem] text-center">
        Our Core Values
      </h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#964B00">
          {coreValues.map((coreValue, index) => (
            <CoreValuesCard key={`values-${index}`} coreValue={coreValue} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default CoreValues;
