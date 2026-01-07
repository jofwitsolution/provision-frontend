import React from "react";
import { motion } from "framer-motion";

import { images } from "../constants/images";
import styles from "../styles/tailwind";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-black-400 pt-[5rem] text-white">
      <div className="xxs:w-[88%] md:w-[80%] xl:max-w-[1100px] mx-auto flex flex-wrap flex-col sm:flex-row justify-between items-start border-b-[1px] border-gray border-solid pb-5 sm:pb-14 mb-6">
        <div className="mb-4 sm:mb-0">
          <h4 className={`text-[1.3rem] font-[700] mb-2 sm:mb-4`}>Company</h4>
          <ul className="text-[0.8rem] md:text-[1rem]">
            <li className="mb-2">
              <a href="/terms-and-conditions" className="hover:text-primary">
                Terms & Conditions
              </a>
            </li>
            <li className="mb-2">
              <a href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="/referrals" className="hover:text-primary">
                Referrals
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-primary">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="/faqs" className="hover:text-primary">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 sm:mb-0">
          <h4 className={`text-[1.3rem] font-[700] mb-2 sm:mb-4`}>
            Quick Links
          </h4>
          <ul className="text-[0.8rem] md:text-[1rem]">
            <li className="mb-2">
              <a href="/about" className="hover:text-primary">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="/accommodation" className="hover:text-primary">
                Accommodation
              </a>
            </li>
            <li className="mb-2">
              <a href="/support" className="hover:text-primary">
                Support
              </a>
            </li>
            <li className="mb-2">
              <a href="/communities" className="hover:text-primary">
                Communities
              </a>
            </li>
            <li className="mb-2">
              <a href="/events" className="hover:text-primary">
                Latest Events
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 sm:mb-0">
          <h4 className={`text-[1.3rem] font-[700] mb-2 sm:mb-4`}>Subscribe</h4>
          <p className="text-[0.8rem]">
            Subscribe to get latest news
            <br /> about events and development
          </p>
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="placeholder:text-[italic] bg-secondaryBackground h-10 pl-4 my-4 focus:border-2 focus:border-primary border-solid focus:outline-none shadow-sm"
              />
              <button
                type="submit"
                className={`${styles.buttonTwo} text-white text-[0.8rem]`}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="mb-4 sm:mb-0">
          <h4 className={`text-[1.3rem] font-[700] mb-2 sm:mb-4`}>
            <span className="text-primary">ProVision</span> Support
          </h4>
          <ul className="text-[0.8rem] md:text-[1rem]">
            <li className="mb-2">
              <a
                href="mailto: info@guardenforcement.com"
                className="hover:text-primary"
              >
                info@provisionsupportservice.co.uk
              </a>
            </li>
            <li className="mb-2">
              <a
                href="tel: +44 7828 887031"
                className="text-primary hover:underline"
              >
                +44 7828 887031
              </a>
            </li>
            <li className="mb-2">
              <a
                href="tel: +44 7581 467406"
                className="text-primary hover:underline"
              >
                +44 7581 467406
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="xxs:w-[88%] md:w-[80%] xl:max-w-[1100px] mx-auto flex flex-col-reverse sm:flex-row justify-between items-start pb-6 gap-4">
        <div>Copyright © 2024</div>
        <div className="flex gap-5">
          <a
            href="https://www.facebook.com"
            className="text-white hover:text-primary"
            target={"-blank"}
            rel="noreferrer"
          >
            <FaFacebookF fontSize={18} />{" "}
          </a>
          <a
            href="https://www.linkedin.com/company/provision-support-services-cic"
            className="text-white hover:text-primary"
            target={"-blank"}
            rel="noreferrer"
          >
            <FaLinkedin fontSize={18} />{" "}
          </a>
          <a
            href="https://instagram.com/provisioncic"
            className="text-white hover:text-primary"
            target={"-blank"}
            rel="noreferrer"
          >
            <AiFillInstagram fontSize={18} />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
