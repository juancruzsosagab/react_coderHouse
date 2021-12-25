import { Fragment } from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cartxample = () => {
  const { cart, removeItem, total } = useContext(CartContext);
  console.log(cart);
  return cart[0] ? (
    <>
      {cart.map((items) => {
        return (
          <>
            <div key={items.id}>
              <h1>{items.title}</h1>
              <p>Precio individual: ${items.price}</p>
              <p>Cantidad: {items.quantity} items</p>
              <p>SubTotal: ${items.subtotal} </p>
              <button onClick={() => removeItem(items)}>Borrar item</button>
            </div>
          </>
        );
      })}
      <h2>Total: ${total} </h2>
    </>
  ) : (
    <>
      <h1>No hay items en el carrito</h1>
      <Link to="/">
        <button>Volver a Home</button>
      </Link>
    </>
  );
};

export default Cartxample;
