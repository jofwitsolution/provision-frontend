import { z } from "zod";

export const FormDataSchema = z.object({
  name: z.string().nonempty("Name is required."),
  message: z
    .string()
    .nonempty("Message is required.")
    .min(6, { message: "Message must be at least 6 characters." }),
});

export const GetInTouchSchema = z.object({
  name: z.string().nonempty("Name is required."),
  phone: z.string().nonempty("Phone is required."),
  email: z.string().nonempty("Email is required.").email("Invalid email."),
  subject: z.string().nonempty("Subject is required."),
  message: z
    .string()
    .nonempty("Message is required.")
    .min(6, { message: "Message must be at least 6 characters." }),
});

export const ReferSomeoneSchema = z.object({
  clientFullName: z.string().nonempty("full name is required."),
  clientBirthDate: z.string().nonempty("Birth date is required."),
  clientGender: z.string("Select a sex").nonempty("Gender is required."),
  clientEmail: z
    .string()
    .nonempty("Client email is required.")
    .email("Enter valid email."),
  clientAddLineOne: z.any(),
  clientAddLineTwo: z.any(),
  clientCounty: z.any(),
  clientCity: z.any(),
  clientPostCode: z.any(),
  clientPhone: z.string(),
  supportReason: z
    .string()
    .nonempty("Support reason is required.")
    .min(6, { message: "Must be at least 6 characters." }),
  assistance: z.string(),
  clientContactModes: z.array(z.string()).nonempty("Select at least one."),
  referralFullName: z.string().nonempty("Your full name is required."),
  referralRole: z.string(),
  agencyOrProvider: z.string(),
  referralPhone: z.string(),
  referralEmail: z
    .string()
    .nonempty("Your email is required.")
    .email("Enter valid email."),
  discoveryMode: z.string().nonempty("discovery mode is required."),
});
