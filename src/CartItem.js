const CartItem = ({ product, quantity }) => {
  const subTotal = product.price * quantity;
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{quantity}</td>
      <td>{subTotal}</td>
    </tr>
  );
};

export default CartItem;
