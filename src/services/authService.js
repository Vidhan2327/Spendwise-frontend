import axios from "axios";

const API_URL = "http://localhost:5001/api/auth/";

const register = (username, email, password) => {
  return axios.post(
    API_URL + "register",
    { username, email, password },
    { withCredentials: true }
  );
};

const login = (email, password) => {
  return axios.post(
    API_URL + "login",
    { email, password },
    { withCredentials: true }
  );
};

const logout = () => {
  return axios.post(API_URL + "logout", {}, { withCredentials: true });
};

export default { register, login, logout };
