import type { CartItem, Product } from "../types";

type CartAction = { type: "ADD_ITEM"; payload: Product } | CartActionRemove;
type CartActionRemove = {
  type: "REMOVE_ITEM";
  payload: { id: number; quantity?: number };
};

export function cartReducer(
  cartItems: CartItem[],
  action: CartAction
): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      let exists = false;
      const newCart: CartItem[] = [];

      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === action.payload.id) {
          exists = true;
          newCart.push({
            id: cartItems[i].id,
            name: cartItems[i].name,
            price: cartItems[i].price,
            quantity: cartItems[i].quantity + 1,
          });
        } else {
          newCart.push(cartItems[i]);
        }
      }
      if (!exists) {
        newCart.push({ ...action.payload, quantity: 1 });
      }
      return newCart;
    }

    case "REMOVE_ITEM": {
      const { id, quantity = 1 } = action.payload; // default ta bort 1
      return cartItems
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - quantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // ta bort helt om quantity <= 0
    }
    default:
      return cartItems;
  }
}
