export interface Product {
  id: number;
  price: number;
  name: string;
}

export interface CartItem {
  id: number;
  price: number;
  name: string;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number };
