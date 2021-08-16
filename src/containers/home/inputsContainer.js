import CustomInput from "../../components/CustomInput";
import { inputProps } from "../../constants";

const InputsContainer = () => {
  const {
    email: { label: emailLabel, placeholder: emailPlaceholder },
    password: { label: passLabel, placeholder: passPlaceholder }
  } = inputProps;

  return (
    <div className="spaced">
      <CustomInput placeholder={emailPlaceholder} label={emailLabel} />
      <CustomInput placeholder={passPlaceholder} label={passLabel} />
      <CustomInput />
    </div>
  );
};

export default InputsContainer;
