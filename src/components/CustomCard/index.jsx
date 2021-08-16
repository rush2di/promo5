import Card from "react-bootstrap/Card";
import { cardProps } from "../../constants";

const { defaults } = cardProps;

const CustomCard = ({
  title = defaults.title,
  text = defaults.text,
  imgSrc = defaults.imgSrc,
  theme = defaults.theme,
  children
}) => (
  <Card
    bg={theme === "dark" ? "dark" : "light"}
    text={theme === "dark" ? "light" : "dark"}
  >
    <Card.Img src={imgSrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      {children}
    </Card.Body>
  </Card>
);

export default CustomCard;
