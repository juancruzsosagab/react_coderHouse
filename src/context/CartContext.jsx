import React, { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";



const CartContext = React.createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [OrderId, setOrderId] = useState("");

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

  // Avance cración de orden, hardcodeada
  const newOrder = {   
    name: "juan",
    phone: 2613733585,
    email: "juancruz.sosag@gmail.com"
  };
  const db = getFirestore()
  const ref = collection(db,"orders");
   
  addDoc(ref, newOrder)
  console.log(newOrder)


  return (
    <CartContext.Provider value={{ addItem, removeItem, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
