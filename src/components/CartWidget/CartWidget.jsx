import carritoCompras from "./carrito-de-compras.png";
import "./index.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <div>
      <img src={carritoCompras} alt="Logo" />
      <div className="basketitems">{totalQuantity}</div>
    </div>
  );
};

export default CartWidget;
