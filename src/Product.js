import { useContext } from "react";
import { ShopContext } from "./App";

const Product = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div>
      <table>
        <tr>{product.title}</tr>
        <tr>{product.price}</tr>
        <tr>
          <img src={product.image} width="50" height="60" />
        </tr>
        <tr>
          <button onClick={() => addToCart(product.id)}>ADD</button>
        </tr>
      </table>
    </div>
  );
};

export default Product;
