import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { products } from "../data/products";

export function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
