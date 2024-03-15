
import classes from "./MealsSummery.module.css";

const MealsSummery = (props) => {
    return(
    <section className={classes.summery}>
        <h2>Delicious Food,deliverd to you</h2>
        <p>
          {" "}
          choose your favorite meal from our broad selection of available meals and
          enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All enjoy meal are cooked with hight-quality ingrdient, just-in-time and
          of course by exprienced chefs!
        </p>
      </section>
    );
};

export default MealsSummery;
