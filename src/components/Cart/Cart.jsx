import { Fragment } from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cartxample = () => {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <Fragment>
      {cart.map((items) => (
        <>
          <h1>{items.title}</h1>
          <p>Precio individual: ${items.price}</p>
          <p>Cantidad: {items.quantity} items</p>
          <button onClick={() => removeItem(items)}></button>
        </>
      ))}
    </Fragment>
  );
};

export default Cartxample;
