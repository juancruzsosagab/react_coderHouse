import { Fragment } from "react";

const ItemDetail = ({ item }) => {
  return (
    <Fragment>
       <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt="" />
      <p>{item.description}</p>
      <p>$ {item.price}</p>
  </Fragment>
  );
};

export default ItemDetail;
