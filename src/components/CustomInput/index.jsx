import Form from "react-bootstrap/Form";
import { inputProps } from "../../constants";

const { defaults } = inputProps;

const CustomInput = ({
  label = defaults.label,
  placeholder = defaults.placeholder
}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control type="email" placeholder={placeholder} />
      </Form.Group>
    </Form>
  );
};

export default CustomInput;
