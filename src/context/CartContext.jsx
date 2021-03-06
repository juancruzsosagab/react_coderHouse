import React, { useState } from "react";

const CartContext = React.createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    const findCart = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (findCart === -1) {
      setCart([
        ...cart,
        { ...item, quantity, subtotal: item.price * quantity },
      ]);
      setTotal(total + quantity * item.price);
      setTotalQuantity(totalQuantity + quantity);
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
      setTotalQuantity(totalQuantity + quantity);
    }
  };

  const removeItem = (item) => {
    const cartNew = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(cartNew);
    setTotal(total - item.subtotal);
    setTotalQuantity(totalQuantity - item.quantity);
  };

  // Avance cración de orden, hardcodeada

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, cart, total, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
