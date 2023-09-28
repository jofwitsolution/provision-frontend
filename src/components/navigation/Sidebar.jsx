import React, { useContext, useState } from "react";
import {
  AiFillCloseCircle,
  AiOutlineTeam,
  AiOutlineLogout,
  AiOutlineLogin,
  AiOutlineClose,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { HiHome, HiOfficeBuilding } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  MdMiscellaneousServices,
  MdOutlineChildCare,
  MdOutlineContacts,
} from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { BsSearch, BsPeople, BsChevronDown } from "react-icons/bs";
import auth from "../../services/authService";
import { GlobalContext } from "../../providers/ContextProvider";
import { images } from "../../constants/images";

const DropDown = ({ title, links, toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white"
        onClick={toggleDropdown}
      >
        <HiOfficeBuilding />
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            {title}
          </span>
          <span
            className={`text-sm ${isDropdownOpen ? "rotate-180" : ""}`}
            id="arrow"
          >
            <BsChevronDown />
          </span>
        </div>
      </div>
      <div
        className={`text-left text-sm mt-2 w-4/5 mx-auto font-bold ${
          isDropdownOpen ? "" : "hidden"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            onClick={toggleSidebar}
            to={link.path}
            className="p-2 hover:bg-primary rounded-md mt-1 block"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

const linkOne = [
  { label: "Rent a home", path: "/rent-a-home" },
  { label: "Buy a home", path: "/buy-a-home" },
  { label: "New developments", path: "/new-developments" },
];

const linkTwo = [
  { label: "Ways to get involved", path: "/ways-to-get-involved" },
  { label: "Our customer panel", path: "/our-customer-panel" },
  { label: "Community investment", path: "/community-investment" },
];

const Sidebar = () => {
  const { isSidebarOpen, setSidebarOpen } = useContext(GlobalContext);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div
        className={`sidebar ${
          isSidebarOpen ? "" : "hidden"
        } fixed z-[500] text-white top-0 bottom-0 left-0 p-2 w-[300px] lg:hidden overflow-y-auto text-center bg-black-300`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <img
              src={images.primary_logo}
              alt="provision property"
              className="w-[160px] md:w-[250px]"
            />
            <span
              onClick={toggleSidebar}
              className="cursor-pointer absolute top-[10px] right-[10px]"
            >
              <AiOutlineClose />
            </span>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-grey-500 text-white">
          <BsSearch className="text-sm" />
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <Link
          onClick={toggleSidebar}
          to="/"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white"
        >
          <HiHome className="" />
          <span className="text-[15px] ml-4 font-bold">Home</span>
        </Link>
        <Link
          onClick={toggleSidebar}
          to="/about"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white"
        >
          <BsPeople className="" />
          <span className="text-[15px] ml-4 font-bold">About</span>
        </Link>
        <Link
          onClick={toggleSidebar}
          to="/accommodation"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white"
        >
          <HiOfficeBuilding className="" />
          <span className="text-[15px] ml-4 font-bold">Accommodation</span>
        </Link>
        <Link
          onClick={toggleSidebar}
          to="/support"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white"
        >
          <MdOutlineChildCare className="" />
          <span className="text-[15px] ml-4 font-bold">Support</span>
        </Link>
        <Link
          onClick={toggleSidebar}
          to="/communities"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white"
        >
          <IoIosPeople className="" />
          <span className="text-[15px] ml-4 font-bold">Communities</span>
        </Link>

        <div className="my-4 bg-grey-200 h-[1px]"></div>

        <Link
          to="/contact"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 hover:bg-primary text-white"
        >
          <MdOutlineContacts />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Contact
          </span>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
