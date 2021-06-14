import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />

      <div className="container">
        <AvailableMeals />
      </div>
    </Fragment>
  );
};

export default Meals;
