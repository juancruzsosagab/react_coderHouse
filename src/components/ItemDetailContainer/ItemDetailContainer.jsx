import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import Items from "../ItemListContainer/Items.js";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [itemData, setItemData] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Items);
        }, 2000);
      });
    };

    getItem().then((res) => {
      id ? setItemData(res.find((item) => item.id === id)) : setItemData(res);
      setLoading(false);
    });
  }, [id]);

  return (
    <Fragment>
      {loading ? <h1>Loading...</h1> : <ItemDetail item={itemData} />}
    </Fragment>
  );
};

export default ItemDetailContainer;
