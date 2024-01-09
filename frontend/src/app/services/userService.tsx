import axios from "axios";
// import authHeader from "./authHeader";

const API_URL: string = "/";

export const getPublicContent = () => {
  return axios.get(API_URL + "");
};

// export const getUserBoard = () => {
//   return axios.get(API_URL + "/api/v1/user");
// };

// export const getAdminBoard = () => {
//   return axios.get(API_URL + "/api/v1/admin");
// };
