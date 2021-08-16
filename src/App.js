import CardsContainer from "./containers/home/cardsContainer";
import InputsContainer from "./containers/home/inputsContainer";
import "./app.css";

const App = () => {
  return (
    <div className="container-around">
      <InputsContainer />
      <hr></hr>
      <CardsContainer />
    </div>
  );
};

export default App;

/*///////////////////////////////////////////////////////////////////////////////////////




















import { toUpperCase } from "./utils/stringUtils";
import { STATIC_HELLO } from "./constants";
import CustomButton from "./components/CustomButton";
import { bootstrapButtonVariant, buttonTexts } from "./constants";

const App = () => {
  return (
    <div style={{ margin: "1rem" }}>
      <CustomButton
        color={bootstrapButtonVariant.success}
        text={buttonTexts.success}
      />{" "}
      <br></br>
      <br></br>
      <CustomButton
        color={bootstrapButtonVariant.outlineWarning}
        text={buttonTexts.outlineWarning}
      />
      <br></br>
      <br></br>
      <CustomInput placeholder={"Write your email here..."} label={"Email"} />
    </div>
  );
};


 */
