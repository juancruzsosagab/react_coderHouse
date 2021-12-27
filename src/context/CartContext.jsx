import React, { useState } from "react";

const CartContext = React.createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item, quantity) => {
    const findCart = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (findCart === -1) {
      setCart([
        ...cart,
        { ...item, quantity, subtotal: item.price * quantity },
      ]);
      setTotal(total + quantity * item.price);
    } else {
      const cartSameNew = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.quantity = cartItem.quantity + quantity;
          cartItem.subtotal = cartItem.quantity * cartItem.price;
        }
        return cartItem;
      });

      setCart(cartSameNew);
      setTotal(total + quantity * item.price);
    }
  };

  const removeItem = (item) => {
    const cartNew = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(cartNew);
    setTotal(total - item.subtotal);
  };

  // Avance cración de orden, hardcodeada

  return (
    <CartContext.Provider value={{ addItem, removeItem, cart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
