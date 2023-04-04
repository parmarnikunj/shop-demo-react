import { useContext, useState } from "react";
import { ShopContext } from "./App";
import CartItem from "./CartItem";
import product from "./Product";

const Cart = () => {
  const { cart, products } = useContext(ShopContext);
  let grandTatal = 0
    Object.entries(cart).map(([id,quantity]) => {
        const product = products[id]
        const subTotal = product.price * quantity
        grandTatal = subTotal + grandTatal
    })

  return (
    <div>
      <h1>Welcome to Cart</h1>
      <table className="table">
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </thead>
          <tbody>
          {Object.entries(cart).map(([key, value]) => {
            return <CartItem product={products[key]} quantity={value} />;
          })}
          <tr>
              <td></td>
              <td></td>
              <td>Grad Total</td>
              <td>{grandTatal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Cart;
