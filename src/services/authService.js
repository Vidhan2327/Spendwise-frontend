import axios from "axios";

const API_URL = "http://localhost:5001/api/auth/";

/*
  Makes a POST request to the /register endpoint.
 */
const register = (username, email, password) => {
  return axios.post(
    API_URL + "register",
    { username, email, password },
    { withCredentials: true } // allow browser to receive httpOnly cookie
  );
};

/*
 Makes a POST request to the /login endpoint.
 */
const login = (email, password) => {
  return axios.post(
    API_URL + "login",
    { email, password },
    { withCredentials: true } // allow browser to receive httpOnly cookie
  );
};

const authService = {
  register,
  login,
};

export default authService;
