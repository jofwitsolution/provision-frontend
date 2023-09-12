import React, { useContext, useState } from "react";
import { Formik, Form } from "formik";
import { MyTextArea, MyTextInput } from "../formik";
import { contactFormSchema } from "../../form-validation/validationSchemas";
import { sendContactMessage } from "../../services/contactService";
import RotatingLinesLoader from "../loaders/RotatingLinesLoader";
import { GlobalContext } from "../../providers/ContextProvider";

const inputStyle =
  "bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal";

const ContactForm = ({ successfulDelivery }) => {
  const { setSliderNotification } = useContext(GlobalContext);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (values, setSubmitting, resetForm) => {
    setSuccessMessage("");
    setError("");

    try {
      const { data } = await sendContactMessage(values);
      setSliderNotification({
        isActive: true,
        text: "We have received your message. We will get back to you as soon as possible. Thank you.",
      });
      successfulDelivery();
      resetForm({
        values: {
          fullName: "",
          email: "",
          phone: "",
          message: "",
        },
      });
    } catch (err) {
      console.log(err);
      if (err?.response?.data?.message) {
        setError(err.response.data.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={contactFormSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values, setSubmitting, resetForm);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-4">
            <MyTextInput
              className={inputStyle}
              type="text"
              placeholder="Enter your full name"
              name="fullName"
              label="Full Name"
              labelClass="block text-gray-700 font-medium mb-2"
            />
          </div>

          <div className="mb-4">
            <MyTextInput
              className={inputStyle}
              type="email"
              placeholder="Enter your email address"
              name="email"
              label="Email"
              labelClass="block text-gray-700 font-medium mb-2"
            />
          </div>

          <div className="mb-4">
            <MyTextInput
              className={inputStyle}
              type="tel"
              placeholder="Enter your number"
              name="phone"
              label="Phone"
              labelClass="block text-gray-700 font-medium mb-2"
            />
          </div>

          <div className="mb-4">
            <MyTextArea
              className={inputStyle}
              type="text"
              placeholder="Enter your message"
              name="message"
              label="Message"
              labelClass="block text-gray-700 font-medium mb-2"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-primary hover:bg-primaryAlt text-white font-medium py-2 px-4 rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? <RotatingLinesLoader /> : "Submit"}
            </button>
            {error ? (
              <p className="text-red-500 text-center mt-3">{error}</p>
            ) : null}
            {successMessage ? (
              <p className="text-center mt-3">{successMessage}</p>
            ) : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
