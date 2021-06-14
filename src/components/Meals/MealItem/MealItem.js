import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div>
      <li className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center">
        <div>
          <div>
            <h3>{props.name}</h3>
          </div>
          <div className="fs-5">{props.description}</div>
          <div className="text-danger fs-3">{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    </div>
  );
};

export default MealItem;
