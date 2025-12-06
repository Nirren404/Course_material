import { useContext } from "react";
import { CartContext } from "../context/cart.context";

export function CartSummary() {
  const { cart, removeFromCart } = useContext(CartContext);

  let totalItems = 0;
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalItems += cart[i].quantity;
    totalPrice += cart[i].price * cart[i].quantity;
  }

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <strong>
        <p>Total Price: ${totalPrice}</p>
      </strong>

      {cart.length > 0 && (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
