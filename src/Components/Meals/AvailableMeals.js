import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";
import { useEffect, useState } from "react";

const AvailableMeals = (props) => {
  const [IsLoding, setIsLoding] = useState(true);
  const [meals, setmeals] = useState([]);
  const [HttpError, setHttpError] = useState([null]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-food-delivery-dc2b9-default-rtdb.firebaseio.com/meals"
      );
      const responseData = await response.json();

if (!response.ok) {
  throw new Error("something went wrong");
  
}
      const loadedMeals = [];
     

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setmeals(loadedMeals);
      setIsLoding(false);
    };
    
      fetchMeals().catch(error => {
        setIsLoding(false);
        setHttpError(error.message);
      });
   
    
  }, []);

  
  if (IsLoding) {
    return(
    <section className={classes.Loding}>
      <p>
        Loding...
      </p>
    </section>
    );
  }

  if (HttpError) {
    return(
    <section className={classes.Error}>
    <p>
     {HttpError.message}
    </p>
  </section>
    );  
  }

  const mealsList = meals.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
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
