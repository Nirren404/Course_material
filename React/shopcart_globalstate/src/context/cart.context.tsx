import { createContext, useReducer } from "react";
import type { CartContextType } from "../types";
import { cartReducer } from "../reducers/cart.reducers";
import type { Product } from "../types";
import { ProductList } from "../component/product.list.component";
import { CartSummary } from "../component/cart.summary";

// Create context
export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// CartProvider as a normal component with no props
export function CartProvider() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: productId } });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div>
        <h1>Simple Shop</h1>
        <ProductList />
        <CartSummary />
      </div>
    </CartContext.Provider>
  );
}
