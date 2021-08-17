import { Form } from "react-bootstrap";
import { inputProps } from "../../constants";

const { defaults } = inputProps;

const CustomInput = ({
  label = defaults.label,
  placeholder = defaults.placeholder,
  type = defaults.type,
  name = defaults.name,
  value,
  onChange
}) => {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default CustomInput;
