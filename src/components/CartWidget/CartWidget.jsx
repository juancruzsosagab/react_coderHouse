import carritoCompras from  './carrito-de-compras.png';
import { Fragment } from "react";

const CartWidget = () =>{

    return (
    <Fragment>
    <img src={carritoCompras} alt="Logo" />
    </Fragment>
    )
}

export default CartWidget;