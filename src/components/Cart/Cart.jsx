import { Fragment } from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartMain = () => {
  const { cart, removeItem, total } = useContext(CartContext);

  return cart[0] ? (
    <>
      {cart.map((items, index) => {
        return (
          <Fragment key={items.id}>
            <div id={items.id}>
              <h1>{items.title}</h1>
              <p>Precio individual: ${items.price}</p>
              <p>Cantidad: {items.quantity} items</p>
              <p>SubTotal: ${items.subtotal} </p>
              <button onClick={() => removeItem(items)}>Borrar item</button>
            </div>
          </Fragment>
        );
      })}
      <h2>Total: ${total} </h2>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
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

export default CartMain;
