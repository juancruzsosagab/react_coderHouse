import ItemList from "./ItemList";
import { useState, Fragment, useEffect } from "react";
import { useParams } from "react-router";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cat } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const ref = cat
      ? query(collection(db, "products"), where("category", "==", cat))
      : collection(db, "products");
    setLoading(true);
    getDocs(ref)
      .then((snapShot) => {
        const arrayNew = snapShot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducts(arrayNew);
      })

      .then(() => {
        setLoading(false);
      });
  }, [cat]);

  return (
    <Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{props.title}</h1>
          <ItemList products={products} />
        </>
      )}
    </Fragment>
  );
};

export default ItemListContainer;
