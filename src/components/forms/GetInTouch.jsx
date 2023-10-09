import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import { zodResolver } from "@hookform/resolvers/zod";
import { GetInTouchSchema } from "../../constants/schema";
import MutatingDotsLoader from "../loaders/MutatingDotsLoader";
import { toast } from "react-toastify";
import { GlobalContext } from "../../providers/ContextProvider";
import { sendGetInTouchData } from "../../services/contactService";

const GetInTouch = () => {
  const { setSliderNotification } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(GetInTouchSchema),
  });

  const submitForm = async (data) => {
    try {
      await sendGetInTouchData(data);
      reset();
      setSliderNotification({
        isActive: true,
        text: "Your data was submitted successfully. We will respond as soon as possible. Thank you.",
      });
    } catch (error) {
      if (error?.response?.data?.msg) {
        toast.error(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <div>
        <div className="flex gap-[1rem] items-center">
          <hr className="inline-block border-2 border-grey-100 w-[6rem]" />
          <h3 className="font-[500]">GET IN TOUCH</h3>
        </div>
        <div>
          <h3 className="font-[700] text-[2rem] leading-[2rem]">
            Send Us a Message
          </h3>
        </div>
      </div>
      <div className="py-6">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="md:grid gap-6 md:grid-cols-2"
        >
          <div className="mb-[0.8rem] md:mb-[0rem]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
              placeholder="Your Name"
              {...register("name")}
            />
            <div
              className={`${
                errors.name?.message ? "h-[1.5rem]" : "h-[0rem]"
              } transition-all duration-300`}
            >
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.name?.message}
              </p>
            </div>
          </div>
          <div className="mb-[0.8rem] md:mb-[0rem]">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
              placeholder="Phone Number"
              {...register("phone")}
            />
            <div
              className={`${
                errors.phone?.message ? "h-[1.5rem]" : "h-[0rem]"
              } transition-all duration-300`}
            >
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.phone?.message}
              </p>
            </div>
          </div>
          <div className="mb-[0.8rem] md:mb-[0rem]">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
              placeholder="Your Email"
              {...register("email")}
            />
            <div
              className={`${
                errors.email?.message ? "h-[1.5rem]" : "h-[0rem]"
              } transition-all duration-300`}
            >
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.email?.message}
              </p>
            </div>
          </div>
          <div className="mb-[0.8rem] md:mb-[0rem]">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
              placeholder="Subject"
              {...register("subject")}
            />
            <div
              className={`${
                errors.subject?.message ? "h-[1.5rem]" : "h-[0rem]"
              } transition-all duration-300`}
            >
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.subject?.message}
              </p>
            </div>
          </div>
          <div className="mb-[0.8rem] md:mb-[0rem] col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-3 pl-4 focus:outline-primary rounded-md w-full bg-grey-50 border-none"
              placeholder="Your Message"
              {...register("message")}
            />
            <div
              className={`${
                errors.message?.message ? "h-[1.5rem]" : "h-[0rem]"
              } transition-all duration-300`}
            >
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.message?.message}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex gap-[1.2rem]">
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
              Send Message
            </button>
            {isSubmitting && <MutatingDotsLoader />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
