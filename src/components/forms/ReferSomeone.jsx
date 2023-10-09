import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReferSomeoneSchema } from "../../constants/schema";
import inputOptions from "../../constants/inputOptions";
import MutatingDotsLoader from "../loaders/MutatingDotsLoader";
import { sendReferralData } from "../../services/contactService";
import { toast } from "react-toastify";
import { GlobalContext } from "../../providers/ContextProvider";

const ReferSomeone = () => {
  const { setSliderNotification } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ReferSomeoneSchema),
  });

  const [fixedAddress, setFixedAddress] = useState("no");

  const submitForm = async (data) => {
    const isFixedAddress = fixedAddress === "yes" ? true : false;

    try {
      await sendReferralData({ ...data, isFixedAddress });
      reset();
      setSliderNotification({
        isActive: true,
        text: "Your data was submitted successfully. Thank you.",
      });
    } catch (error) {
      if (error?.response?.data?.msg) {
        toast.error(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)} className="max-w-[60rem]">
        <h2 className="text-[1.5rem] font-bold mb-[1.6rem]">
          Your client's details
        </h2>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="clientFullName"
            className="block font-medium text-gray-700"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="clientFullName"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            placeholder="Full Name"
            {...register("clientFullName")}
          />
          <div
            className={`${
              errors.clientFullName?.message ? "h-[1.5rem]" : "h-[0rem]"
            } transition-all duration-300`}
          >
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.clientFullName?.message}
            </p>
          </div>
        </div>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="clientBirthDate"
            className="block font-medium text-gray-700"
          >
            Date of Birth *
          </label>
          <input
            type="date"
            id="clientBirthDate"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            {...register("clientBirthDate")}
          />
          <div
            className={`${
              errors.clientBirthDate?.message ? "h-[1.5rem]" : "h-[0rem]"
            } transition-all duration-300`}
          >
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.clientBirthDate?.message}
            </p>
          </div>
        </div>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="clientGender"
            className="block font-medium text-gray-700"
          >
            Sex at Birth *
          </label>
          <div>
            <input
              type="radio"
              id="female"
              className=""
              value="female"
              {...register("clientGender")}
            />{" "}
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="male"
              className=""
              value="male"
              {...register("clientGender")}
            />{" "}
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="other"
              className=""
              value="other"
              {...register("clientGender")}
            />{" "}
            <label htmlFor="other">They would prefer not to say</label>
          </div>

          <div
            className={`${
              errors.clientGender?.message ? "h-[1.5rem]" : "h-[0rem]"
            } transition-all duration-300`}
          >
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.clientGender?.message}
            </p>
          </div>
        </div>
        <h2 className="text-[1.5rem] font-bold mt-[2rem] mb-[1.6rem]">
          Your client's contact details
        </h2>
        <p>
          In this section{" "}
          <span className="font-medium">
            please answer all questions on behalf of the person you are
            referring.
          </span>
        </p>
        <div className="mb-[1.2rem] mt-[1rem]">
          <h3 className="block text-[1.2rem]">
            Does your client have a fixed address?
          </h3>
          <div>
            <input
              type="radio"
              className=""
              value="yes"
              id="fixedAddressYes"
              name="fixedAddress"
              onChange={(e) => setFixedAddress(e.target.value)}
            />{" "}
            <label htmlFor="fixedAddressYes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              value="no"
              id="fixedAddressno"
              name="fixedAddress"
              onChange={(e) => setFixedAddress(e.target.value)}
            />{" "}
            <label htmlFor="fixedAddressNo">No</label>
          </div>
        </div>
        {fixedAddress === "yes" ? (
          <div>
            <h3 className="mb-[0.2rem]">Address</h3>
            <div className="mb-1">
              <input
                type="text"
                id="clientAddLineOne"
                className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
                placeholder="Address Line 1"
                {...register("clientAddLineOne")}
              />{" "}
            </div>
            <div>
              <input
                type="text"
                id="clientAddLineTwo"
                className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
                placeholder="Address Line 2"
                {...register("clientAddLineTwo")}
              />{" "}
            </div>
            <div>
              <input
                type="text"
                id="clientCity"
                className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-[41%] bg-grey-50 border-none"
                placeholder="City"
                {...register("clientCity")}
              />{" "}
              <input
                type="text"
                id="clientCounty"
                className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-[29%] bg-grey-50 border-none"
                placeholder="County/Region"
                {...register("clientCounty")}
              />{" "}
              <input
                type="text"
                id="clientPostCode"
                className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-[29%] bg-grey-50 border-none"
                placeholder="Postcode"
                {...register("clientPostCode")}
              />{" "}
            </div>
          </div>
        ) : null}

        <div className="mb-[0.8rem] mt-[2rem]">
          <label htmlFor="phone" className="block font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="clientPhone"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            placeholder="Phone number"
            {...register("clientPhone")}
          />
        </div>
        <div className="mb-[0.8rem]">
          <label htmlFor="name" className="block font-medium text-gray-700">
            Email Address *
          </label>
          <input
            type="email"
            id="clientEmail"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            placeholder="Email"
            {...register("clientEmail")}
          />
          <div
            className={`${
              errors.clientEmail?.message ? "h-[1.5rem]" : "h-[0rem]"
            } transition-all duration-300`}
          >
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.clientEmail?.message}
            </p>
          </div>
        </div>
        <h2 className="text-[1.5rem] font-bold mt-[2rem] mb-[1.6rem]">
          How we can support them
        </h2>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="supportReason"
            className="block font-medium text-gray-700"
          >
            Description of support needs and reason for referral *
          </label>
          <textarea
            rows="4"
            name="supportReason"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            placeholder="Type here"
            {...register("supportReason")}
          ></textarea>
          <div
            className={`${
              errors.supportReason?.message ? "h-[1.5rem]" : "h-[0rem]"
            } transition-all duration-300`}
          >
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.supportReason?.message}
            </p>
          </div>
        </div>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="assistance"
            className="block font-medium text-gray-700"
          >
            Any assistance needed (eg. translation or access needs)
          </label>
          <textarea
            rows="4"
            name="assistance"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            placeholder="Type here"
            {...register("assistance")}
          ></textarea>
        </div>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="clientContactModes"
            className="block font-medium text-gray-700"
          >
            How would your client like us to contact them? *
          </label>
          <div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="clientContactModes"
                value="Letter"
                id="letter"
                {...register("clientContactModes")}
              />
              <label htmlFor="letter">Letter</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="clientContactModes"
                value="Email"
                id="contactEmail"
                {...register("clientContactModes")}
              />
              <label htmlFor="contactEmail">Email</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="clientContactModes"
                value="Phone"
                id="contactPhone"
                {...register("clientContactModes")}
              />
              <label htmlFor="contactPhone">Phone</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="clientContactModes"
                value="Home visit"
                id="contactVisit"
                {...register("clientContactModes")}
              />
              <label htmlFor="contactVisit">Home visit</label>
            </div>
          </div>
          <div
            className={`${
              errors.clientContactModes?.message ? "h-[1.5rem]" : "h-[0rem]"
            } transition-all duration-300`}
          >
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.clientContactModes?.message}
            </p>
          </div>
        </div>
        <h2 className="text-[1.5rem] font-bold mt-[2rem] mb-[1.6rem]">
          Your details
        </h2>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="referralFullName"
            className="block font-medium text-gray-700"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="referralFullName"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            placeholder="Full name"
            {...register("referralFullName")}
          />
          <div
            className={`${
              errors.referralFullName?.message ? "h-[1.5rem]" : "h-[0rem]"
            } transition-all duration-300`}
          >
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.referralFullName?.message}
            </p>
          </div>
        </div>
        <div className="mb-[0.8rem]">
          <label htmlFor="role" className="block font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            id="referralRole"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            placeholder="Role"
            {...register("referralRole")}
          />
        </div>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="agencyOrProvider"
            className="block font-medium text-gray-700"
          >
            Agencey or provider
          </label>
          <input
            type="text"
            id="agencyOrProvider"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            placeholder="Agency/Provider"
            {...register("agencyOrProvider")}
          />
        </div>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="referralPhone"
            className="block font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="referralPhone"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            placeholder="Phone number"
            {...register("referralPhone")}
          />
        </div>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="referralEmail"
            className="block font-medium text-gray-700"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="referralEmail"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            placeholder="Email"
            {...register("referralEmail")}
          />
          <div
            className={`${
              errors.referralEmail?.message ? "h-[1.5rem]" : "h-[0rem]"
            } transition-all duration-300`}
          >
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.referralEmail?.message}
            </p>
          </div>
        </div>
        <div className="mb-[0.8rem]">
          <label
            htmlFor="discoveryMode"
            className="block font-medium text-gray-700"
          >
            How did you hear about our service? *
          </label>
          <select
            id="discoveryMode"
            className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
            {...register("discoveryMode")}
          >
            {inputOptions.discoveryModes.map((item) => (
              <option key={item.label} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <div
            className={`${
              errors.discoveryMode?.message ? "h-[1.5rem]" : "h-[0rem]"
            } transition-all duration-300`}
          >
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.discoveryMode?.message}
            </p>
          </div>
        </div>
        <div className="mt-4 col-span-2 flex gap-[1.2rem]">
          <button
            type="submit"
            disabled={isSubmitting}
            className={classNames(
              "inline-flex h-max justify-center px-10 py-3 text-sm font-medium text-white  rounded focus:outline-none",
              {
                "hover:bg-primaryAlt bg-primary focus:bg-secondary":
                  !isSubmitting,
                "bg-grey-50": isSubmitting,
              }
            )}
          >
            Submit
          </button>
          {isSubmitting && <MutatingDotsLoader />}
        </div>
      </form>
    </div>
  );
};

export default ReferSomeone;
