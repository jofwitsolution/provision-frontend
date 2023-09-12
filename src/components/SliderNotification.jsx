import React, { useContext, useEffect, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { GlobalContext } from "../providers/ContextProvider";

const SliderNotification = () => {
  const { sliderNotification, setSliderNotification } =
    useContext(GlobalContext);
  const sliderIntervalId = useRef(null);

  useEffect(() => {
    if (sliderNotification.isActive) {
      sliderIntervalId.current = setTimeout(
        () => setSliderNotification((prev) => ({ ...prev, isActive: false })),
        10000
      );
    }

    return () => clearInterval(sliderIntervalId.current);
  }, [sliderNotification]);

  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [-100, 0] }}
      transition={{ duration: 1.5, type: "tween" }}
      className={`${
        sliderNotification.isActive ? "block" : "hidden"
      } fixed z-[5000] shadow-md top-0 left-0 right-0 h-[100px] rounded-b-md border-black border-t-4 border-l-4 text-white bg-primary`}
    >
      <div className="relative h-full flex justify-center items-center px-[20px] md:px-[30px] md:text-[20px]">
        <button
          onClick={() =>
            setSliderNotification((prev) => ({ ...prev, isActive: false }))
          }
          className="absolute top-[10px] right-[10px]"
        >
          {" "}
          <AiFillCloseCircle
            fontSize={30}
            className="cursor-pointer text-white"
          />
        </button>
        <p>{sliderNotification.text}</p>
      </div>
    </motion.div>
  );
};

export default SliderNotification;
