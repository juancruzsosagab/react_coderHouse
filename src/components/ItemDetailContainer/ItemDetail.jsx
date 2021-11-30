import { Fragment } from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ item }) => {
  return (
    <Fragment>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt="" />
      <p>{item.description}</p>
      <p>$ {item.price}</p>
      <ItemCount stock={item.stock} initial={1} /> 
    </Fragment>
  );
};

export default ItemDetail;
