import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Salad Rolls",
    description: "Shredded chicken and fresh veggetables",
    price: 9.99,
  },
  {
    id: "m2",
    name: "Indian omelette",
    description: "6 eggs, minced red onion, chilli, paprika, vegetable oil!",
    price: 11.29,
  },
  {
    id: "m3",
    name: "The Perfect Turkey Lunch",
    description:
      "8kg turkey, 1 kilo sausage meat, 12g chopped fresh sage, 120g onions",
    price: 18.99,
  },
  {
    id: "m4",
    name: "Vegetable noodle soup",
    description:
      "2 tbsp extra-virgin olive oil, 1 celery stick sliced,1 medium carrot sliced",
    price: 6.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="my-5">
      <Card>
        <ul className="list-group list-group-flush">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
