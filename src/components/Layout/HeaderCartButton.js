import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <div className="">
      <button
        type="button"
        className="btn btn-primary rounded-pill px-1"
        onClick={props.onClick}
      >
        {/* icon */}
        <span className="fs-5 mx-2">
          <i class="bi bi-cart-check"></i>
        </span>

        {/* amount of meals */}
        <span>
          <span class="badge rounded-pill bg-light text-dark fs-6">
            {numberOfCartItems} Items
          </span>
        </span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
