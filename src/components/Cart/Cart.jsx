import { Fragment } from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cartxample = () => {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <Fragment>
      {cart[0] ? (
        cart.map((items) => (
          <>
            <h1>{items.title}</h1>
            <p>Precio individual: ${items.price}</p>
            <p>Cantidad: {items.quantity} items</p>
            <button onClick={() => removeItem(items)}>Borrar item</button>
          </>
        ))
      ) : (
        <>
          <h1>No hay items en el carrito</h1>
          <Link to="/">
            <button>Volver a Home</button>
          </Link>
        </>
      )}
    </Fragment>
  );
};

export default Cartxample;
