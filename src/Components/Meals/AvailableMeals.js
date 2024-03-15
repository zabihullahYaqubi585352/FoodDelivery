import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Makarani",
    description: "very good and delicious food",
    price: 50,
  },
  {
    id: "m2",
    name: "Rice",
    description: "very good and delicious food",
    price: 150,
  },
  {
    id: "m3",
    name: "Pizza",
    description: "very good and delicious food",
    price: 250,
  },
  {
    id: "m4",
    name: "Potato",
    description: "very good and delicious food",
    price: 40,
  },
];
const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
