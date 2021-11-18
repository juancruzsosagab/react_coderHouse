import { Fragment } from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <Fragment>
      {products.map((items) => (
        <Item
          key={items.id}
          title={items.title}
          price={items.price}
          pictureUrl={items.pictureUrl}
          description={items.description}
        />
      ))}
    </Fragment>
  );
};

export default ItemList;
