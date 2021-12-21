import React, { useState } from "react";

const CartContext = React.createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  let total;

  const calculateTotal = ()=>{
    cart.length >= 1 ?
    cart.map(()=>{
    return  console.log("hola")
    })
    :console.log("hola")
    }
  

  const addItem = (item, quantity) => {
    const findCart = cart.findIndex((cart) => cart.id === item.id);
    if (findCart === -1) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      console.log("el item ya está en el carro");
    }
  };

  const removeItem = (item) => {
    const cartNew = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(cartNew);
  };

  return (
    <CartContext.Provider value={{ addItem, removeItem, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
