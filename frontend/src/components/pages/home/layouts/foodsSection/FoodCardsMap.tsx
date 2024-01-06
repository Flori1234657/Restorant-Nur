import FoodCardPh from "../../../../same/cards/FoodCardPh";
import FoodCardPc from "../../../../same/cards/FoodCardPc";

const FoodCardsMap = () => {
  return (
    <>
      {[1, 2, 3].map((el) => (
        <FoodCardPh key={el} />
      ))}
    </>
  );
};

export default FoodCardsMap;
