import { Fragment } from "react";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const CartMain = () => {
  const { cart, removeItem, total } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const sendOrder = () => {
    const newOrder = {
      buyer: {
        name: "name",
        phone: 5492613733585,
        email: "juancruz.sosag@gmail.com",
      },
      items: cart,
      date: new Date(),
      total: total,
    };

    const db = getFirestore();
    const ref = collection(db, "orders");

    addDoc(ref, newOrder)
      .then(({ id }) => setOrderId(id))
      .then(alert(`Tu order ID es ${orderId}`));
  };

  console.log(cart);
  return cart[0] ? (
    <>
      {cart.map((items, index) => {
        return (
          <>
            <div key={index} id={items.id}>
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
      <button onClick={() => sendOrder()}>Finalizar compra</button>
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
