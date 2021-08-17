import Button from "react-bootstrap/Button";

const index = ({ color, text, onClick }) => {
  return (
    <Button variant={color} onClick={onClick}>
      {text}
    </Button>
  );
};
export default index;
