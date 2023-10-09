import React from "react";
import { MutatingDots } from "react-loader-spinner";

const MutatingDotsLoader = () => {
  return (
    <span>
      <MutatingDots
        height="80"
        width="80"
        color="#964B00"
        secondaryColor="#964B70"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </span>
  );
};

export default MutatingDotsLoader;
