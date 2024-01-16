import axios from "axios";

const API_URL: string = "/api/v1/user";

export const addNewUser = (username: string, password: string, firstName:string, lastName:string, avatar:string,role:string) => {
  return axios
  .post(API_URL, {
    username,
    password,
    firstName,
    lastName,
    avatar,
    role
  })
  .then((response) => {
    console.log("User with username: " + username + "successfully added")
    return response.data
  })
}

export const getPublicContent = () => {
  return axios.get(API_URL + "");
};

// export const getUserBoard = () => {
//   return axios.get(API_URL + "/api/v1/user");
// };

// export const getAdminBoard = () => {
//   return axios.get(API_URL + "/api/v1/admin");
// };
