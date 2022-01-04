import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [itemData, setItemData] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const ref = doc(db, "products", id);

    getDoc(ref)
      .then((snapShot) => {
        const element = { ...snapShot.data(), id: snapShot.id };
        setItemData(element);
      })
      .finally(() => {
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
