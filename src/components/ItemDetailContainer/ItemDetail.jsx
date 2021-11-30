import { Fragment } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [compra, setCompra] = useState(false);

  const onAdd = (counter) => {
    setCompra(true);
    console.log(compra);
    console.log(counter);
  };

  return (
    <Fragment>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt="" />
      <p>{item.description}</p>
      <p>$ {item.price}</p>
      {!compra ? (
        <ItemCount itemStock={item.stock} initial={1} onAdd={onAdd} />
      ) : (
        <Link to={`/cart`}>
          <input type="button" value="Terminar compra" />
        </Link>
      )}
    </Fragment>
  );
};

export default ItemDetail;
