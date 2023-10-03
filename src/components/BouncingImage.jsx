import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { images } from "../constants/images";

const BouncingImage = () => {
  const controls = useAnimation();
  const [scrolling, setScrolling] = useState(false);

  const handleWheel = (e) => {
    if (!scrolling) {
      // Bounce animation
      controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 0.5,
        },
      });

      // Set scrolling to true to prevent continuous animation
      setScrolling(true);

      // Reset scrolling to false after a delay
      setTimeout(() => {
        setScrolling(false);
      }, 500);
    }
  };

  return (
    <motion.img
      src={images.people_6}
      alt="provision 2"
      className="rounded-full md:max-w-[25rem]"
      onWheel={handleWheel}
      animate={controls}
    />
  );
};

export default BouncingImage;
