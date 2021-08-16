import CustomCard from "../../components/CustomCard";
import CustomButton from "../../components/CustomButton";
import { cardProps, bootstrapButtonVariant, buttonTexts } from "../../constants";

const CardsContainer = () => {
  const {
    example_A: { title, text, imgSrc },
    example_B
  } = cardProps;

  return (
    <div className="spaced">
      <CustomCard title={title} text={text} imgSrc={imgSrc}>
        <CustomButton
          color={bootstrapButtonVariant.outlineDark}
          text={buttonTexts.success}
        />
      </CustomCard>
      <hr></hr>
      <CustomCard {...example_B}>
        <CustomButton
          color={bootstrapButtonVariant.danger}
          text={buttonTexts.success}
        />
      </CustomCard>
      <hr></hr>
      <CustomCard />
    </div>
  );
};

export default CardsContainer;
