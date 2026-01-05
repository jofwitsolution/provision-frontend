import React from "react";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="bg-join-us h-[50vh] bg-no-repeat bg-cover px-2 md:px-4 pt-8">
      <div className="w-full h-full items-center text-white text-[1.3rem] md:text-[2rem]">
        <p className="text-center">
          Join ProVision Support and experience living that's about more than
          just a place; it's about community, support, and growth. Welcome home!
        </p>

        <div className="mt-[1.9rem] text-white flex justify-center gap-4">
          <Link to="/contact" className="text-primary underline">
            Get in touch
          </Link>
          <Link to="/referrals" className="text-primaryAlt underline">
            Make a referral
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
