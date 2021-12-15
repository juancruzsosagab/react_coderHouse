import { Fragment } from "react";
import ItemCount from "../ItemCount/ItemCount";

import Card from "react-bootstrap/Card";

import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <Fragment>
      <Card className="text-center">
        <Card.Header>Detalle</Card.Header>
        <Card.Body>
          <img alt="img" src={item.pictureUrl} />
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>

          <ItemCount itemStock={item.stock} initial={1} item={item} />
        </Card.Body>
        <Card.Footer className="text-muted">${item.price}</Card.Footer>
      </Card>
    </Fragment>
  );
};

export default ItemDetail;
