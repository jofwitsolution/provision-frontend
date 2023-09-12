import React, { useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { GlobalContext } from "../../providers/ContextProvider";
import { images } from "../../constants/images";

const Navbar = () => {
  const { currentUser, setToggleSidebar } = useContext(GlobalContext);
  const userIconRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white shadow-md h-[70px] md:h-[90px] fixed top-0 left-0 w-full">
      <div className="max-w-[1440px] h-full mx-auto font-[500] flex justify-between items-center px-[24px]">
        <div className="">
          <a href="/">
            <img
              src={images.primary_logo}
              alt="guard enforcement"
              className="w-[160px] md:w-[250px]"
            />
          </a>{" "}
        </div>
        <div className="hidden lg:flex justify-center gap-8 items-cente">
          <div className="">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              About
            </NavLink>
          </div>
          <div className="relative group">
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primary flex items-center"
                  : "hover:text-primary flex items-center"
              }
            >
              Accommodation <BiChevronDown fontSize={20} />
            </NavLink>
            <div className="hidden group-hover:block shadow py-[10px] absolute top-5 -left-5 text-black bg-white w-[250px] z-[2000]">
              <div>
                <NavLink
                  className="inline-block w-full py-3 pl-3 hover:bg-primaryBackground hover:text-white transition-all duration-300 ease-in-out"
                  to="/rent-a-home"
                >
                  Rent a home
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="inline-block w-full py-3 pl-3 hover:bg-primaryBackground hover:text-white transition-all duration-300 ease-in-out"
                  to="/buy-a-home"
                >
                  Buy a home
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="inline-block w-full py-3 pl-3 hover:bg-primaryBackground hover:text-white transition-all duration-300 ease-in-out"
                  to="/new-developments"
                >
                  New developments
                </NavLink>
              </div>
            </div>
          </div>
          <div className="">
            <NavLink
              to="/care-and-support"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              Care and Support
            </NavLink>
          </div>
          <div className="relative group">
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primary flex items-center"
                  : "hover:text-primary flex items-center"
              }
            >
              Communities <BiChevronDown fontSize={20} />
            </NavLink>
            <div className="hidden group-hover:block shadow py-[10px] absolute top-5 -left-5 text-black bg-white w-[250px] z-[2000]">
              <div>
                <NavLink
                  className="inline-block w-full py-3 pl-3 hover:bg-primaryBackground hover:text-white transition-all duration-300 ease-in-out"
                  to="/ways-to-get-involved"
                >
                  Ways to get involved
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="inline-block w-full py-3 pl-3 hover:bg-primaryBackground hover:text-white transition-all duration-300 ease-in-out"
                  to="/our-customer-panel"
                >
                  Our customer panel
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="inline-block w-full py-3 pl-3 hover:bg-primaryBackground hover:text-white transition-all duration-300 ease-in-out"
                  to="/community-investment"
                >
                  Community investment
                </NavLink>
              </div>
            </div>
          </div>
          <div className="">
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              News
            </NavLink>
          </div>
          <div className="relative">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "border-2 border-primary rounded-xl px-4 py-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-primaryBackground"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="flex lg:hidden">
          <HiMenu
            fontSize={30}
            onClick={() => setToggleSidebar(true)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
