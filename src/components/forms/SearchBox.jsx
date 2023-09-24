import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <div className="w-full sm:w-[35rem] mx-auto py-[2rem] shadow-md rounded-md">
      <form>
        <div className="relative w-[85%] sm:w-[30rem] h-[3rem] mx-auto">
          <span className="absolute z-[2] text-black text-[1.2rem] left-[1rem] top-[50%] translate-y-[-50%]">
            <BsSearch />
          </span>
          <input
            type="text"
            placeholder="Address here"
            className="w-full h-full pl-[3.5rem] py-[0.4rem] bg-[rgba(255,255,255,0.4)] border-secondary border focus:outline-secondary rounded"
          />
        </div>
        <div className="mt-[1rem] flex justify-center">
          <button
            type="submit"
            className="text-center border-none hover:bg-primaryAlt rounded-lg px-[1rem] py-[0.4rem] bg-primary text-white bold"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
