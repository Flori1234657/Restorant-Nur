import FoodCard from "../../../../same/cards/FoodCard";

const FoodCardsMap = () => {
  return (
    <>
      {[1, 2, 3].map((el) => (
        <FoodCard key={el} />
      ))}
    </>
  );
};

export default FoodCardsMap;
