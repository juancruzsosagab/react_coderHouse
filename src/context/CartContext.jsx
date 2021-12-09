import React, { useState } from "react";

const CartContext = React.createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const findCart = cart.findIndex((cart) => cart.id === item.id);
    if (findCart === -1) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      console.log("el item ya está en el carro");
    }
  };

  return (
    <CartContext.Provider value={{ addItem, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;