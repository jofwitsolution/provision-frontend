import React, { useContext } from "react";
import ContactForm from "./forms/ContactForm";
import { GlobalContext } from "../providers/ContextProvider";
import { AiFillCloseCircle } from "react-icons/ai";

const GetStarted = () => {
  const { showGetStarted, setGetStarted } = useContext(GlobalContext);

  const successCallback = () => {
    setGetStarted(false);
  };

  return (
    <div
      className={`${
        showGetStarted ? "flex" : "hidden"
      } bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 w-full h-screen overflow-y-auto justify-center items-center`}
    >
      <div className="w-[320px] xs:w-[400px] px-[20px] py-[30px] relative bg-white">
        <button
          onClick={() => setGetStarted(false)}
          className="absolute top-[10px] right-[10px]"
        >
          {" "}
          <AiFillCloseCircle
            fontSize={30}
            className="cursor-pointer text-primary"
          />
        </button>
        <h2 className="text-center text-[22px] mb-3">We are available</h2>
        <ContactForm successfulDelivery={successCallback} />
      </div>
    </div>
  );
};

export default GetStarted;
