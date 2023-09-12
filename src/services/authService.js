import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import http from "./httpService";

const apiEndPoint = "/auth/login";
const tokenKey = "session-token";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export async function login({ email, password }) {
  const { data } = await http.post(apiEndPoint, { email, password }, config);
  // localStorage.setItem(tokenKey, data.token);
  Cookies.set(tokenKey, data.token, {
    expires: 1,
    secure: true,
  });
}

// to login immediately after signup
export function loginWithJwt(jwt) {
  // localStorage.setItem(tokenKey, jwt);
  Cookies.set(tokenKey, jwt, {
    expires: 1,
    secure: true,
  });
}

export function logout() {
  Cookies.remove(tokenKey);
  // localStorage.removeItem(tokenKey);
}

// to check if user is logged in
export function getCurrentUser() {
  try {
    // const jwt = localStorage.getItem(tokenKey);
    const jwt = Cookies.get(tokenKey);

    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return Cookies.get(tokenKey);
}

const authService = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};

export default authService;
