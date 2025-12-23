import React from "react";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="bg-join-us h-[50vh] bg-no-repeat bg-cover">
      <div className="w-full h-full flex justify-center px-[3rem] md:w-[70%] items-center text-white text-[1.3rem] md:text-[2rem]">
        <Link to="/contact">
          Join ProVision Support and experience living that's about more than
          just a place; it's about community, support, and growth. Welcome home!
        </Link>
      </div>
    </div>
  );
};

export default JoinUs;
