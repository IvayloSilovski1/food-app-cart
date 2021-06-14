import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="list-group list-group-flush">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className="container-fluid py-3 px-2">
        <div className="bg-light p-3">
          <div>{cartItems}</div>
          <div>
            <span className="fs-6">Total price:</span>

            <span className="fs-5 fw-bold">{totalAmount}</span>
          </div>
        </div>

        <div className="mt-4 text-end">
          <button
            className="btn btn-outline-danger rounded-pill"
            onClick={props.onClose}
          >
            Cancel
          </button>
          {hasItems && (
            <button className="btn btn-outline-success rounded-pill">
              Order
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
