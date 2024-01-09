import axios from "axios";

const API_URL: string = "/api/v1/auth/";

// export const register = (username: string, email: string, password: string) => {
//   return axios.post(API_URL + "register", {
//     username,
//     email,
//     password,
//   });
// };

export const userLogin = (username: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};
