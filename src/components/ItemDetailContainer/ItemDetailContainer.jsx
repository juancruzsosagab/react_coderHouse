import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [itemData, setItemData] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const ref = id
      ? query(collection(db, "products"), where("id", "==", id))
      : collection(db, "products");

    getDocs(ref)
      .then((snapShot) => {
        const arrayNew = snapShot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setItemData(arrayNew[0]);
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
