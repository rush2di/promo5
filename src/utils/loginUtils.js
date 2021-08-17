import { loginValidationText } from "../constants";

const validateEmail = (email) => {
  let regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const validateLogin = ([email, pass], [correctEmail, correctPass]) => {
  const {
    short_pass,
    incorrect_pass,
    incorrect_email,
    success
  } = loginValidationText;

  if (email.trim() !== correctEmail || !validateEmail(email)) return incorrect_email;
  if (pass.trim().length < 5) return short_pass;
  if (pass.trim() !== correctPass) return incorrect_pass;
  if (email.trim() === correctEmail && pass.trim() === correctPass) return success;
};
