import * as yup from "yup";

export const usernameSchema = yup.object().shape({
  username: yup.string().email().required(),
});

export const passwordSchema = yup.object().shape({
  password: yup.string().min(5).required(),
});
