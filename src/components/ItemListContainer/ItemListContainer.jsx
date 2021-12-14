import ItemList from "./ItemList";
import { useState, Fragment, useEffect } from "react";
import { useParams } from "react-router";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cat } = useParams();

  const db = getFirestore();
  const ref = collection(db, "products");

  useEffect(() => {
    setLoading(true);
    getDocs(ref)
      .then((snapShot) => {
        snapShot.docs.map((doc) => setProducts([...products, doc.data()]));
        
      })
      .then(() => {
        console.log(products)
        cat &&
          setProducts(products.filter((category) => category.category === cat));

        setLoading(false);
      });
  }, [cat]);

  /* useEffect(() => {
    setLoading(true);
    const callItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (true) {
          resolve(items);
        } else {
          reject("ups error");
        }
      }, 2000);
    });

    callItems
      .then((res) => {
        cat
          ? setProducts(res.filter((category) => category.category === cat))
          : setProducts(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cat]);*/

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
