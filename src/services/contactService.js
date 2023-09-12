import http from "./httpService";
import { getJwt } from "./authService";

const apiEndpoint = "/messages";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwt()}`,
  },
};

export function sendContactMessage(body) {
  return http.post(
    `${apiEndpoint}/send-contact-message`,
    {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      message: body.message,
    },
    config
  );
}
