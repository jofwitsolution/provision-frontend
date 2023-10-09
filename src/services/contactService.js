import apiClient from "./apiClient";

const apiEndpoint = "/emails";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function sendReferralData(body) {
  return apiClient.post(`${apiEndpoint}/refer-someone`, body, config);
}
