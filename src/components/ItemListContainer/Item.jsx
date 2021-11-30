import { Fragment } from "react";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, pictureUrl, description }) => {
  return (
    <Fragment>
      <p>{title}</p>
      <img src={pictureUrl} alt="" />
      <p>$ {price}</p>
      <p>{description}</p>

      <Link to={`/product/${id}`}>
        <input type="button" value="Ver detalle" />
      </Link>
    </Fragment>
  );
};

export default Item;
