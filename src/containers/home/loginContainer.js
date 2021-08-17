import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { validateLogin } from "../../utils/loginUtils";
import {
  inputProps,
  bootstrapButtonVariant,
  buttonTexts,
  loginInfo,
  loginValidationText
} from "../../constants";

const LoginContainer = () => {
  const {
    email: {
      label: emailLabel,
      placeholder: emailPlaceholder,
      type: emailType,
      name: emailName
    },
    password: {
      label: passLabel,
      placeholder: passPlaceholder,
      type: passType,
      name: passName
    }
  } = inputProps;
  const {
    short_pass,
    incorrect_pass,
    incorrect_email,
    success
  } = loginValidationText;

  const { correctEmail, correctPass } = loginInfo;
  const [{ outlineSuccess }, { login }] = [bootstrapButtonVariant, buttonTexts];

  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    if (event.target.name === emailName) {
      setState((prevState) => ({ ...prevState, email: event.target.value }));
    }
    if (event.target.name === passName) {
      setState((prevState) => ({ ...prevState, password: event.target.value }));
    }
  };

  const handleSubmit = () => {
    const { email, password } = state;

    switch (validateLogin([email, password], [correctEmail, correctPass])) {
      case short_pass:
        toast.error(short_pass);
        break;
      case incorrect_pass:
        toast.error(incorrect_pass);
        break;
      case incorrect_email:
        toast.error(incorrect_email);
        break;
      default:
        toast.success(success);
        setState({ email: "", password: "" });
    }
  };

  return (
    <div>
      <Form className="loginForm__wrapper">
        <Form.Group className="mb-3">
          <CustomInput
            placeholder={emailPlaceholder}
            label={emailLabel}
            type={emailType}
            value={state.email}
            name={emailName}
            onChange={handleChange}
          />
          <CustomInput
            placeholder={passPlaceholder}
            label={passLabel}
            type={passType}
            value={state.password}
            name={passName}
            onChange={handleChange}
          />
          <CustomButton color={outlineSuccess} text={login} onClick={handleSubmit} />
          <ToastContainer />
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginContainer;
