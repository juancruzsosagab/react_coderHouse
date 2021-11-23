import { useState, useEffect } from "react";
import Items from "../ItemListContainer/Items.js";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [itemData, setItemData] = useState("");

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Items);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem()
    .then((res) => {
        setItemData(res[0]);
      });
  });

  return <ItemDetail item={itemData} />;
};

export default ItemDetailContainer;
