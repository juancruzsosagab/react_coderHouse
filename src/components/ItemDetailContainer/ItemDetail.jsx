import { Fragment } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ item }) => {
  const [compra, setCompra] = useState(false);

  const onAdd = (counter) => {
    setCompra(true);
    console.log(compra);
    console.log(counter);
  };

  return (
    <Fragment>
      <Card className="text-center">
        <Card.Header>Detalle</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={item.pictureUrl} />
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          {!compra ? (
            <ItemCount itemStock={item.stock} initial={1} onAdd={onAdd} />
          ) : (
            <Link to={`/cart`}>
              <input type="button" value="Terminar compra" />
            </Link>
          )}
        </Card.Body>
        <Card.Footer className="text-muted">${item.price}</Card.Footer>
      </Card>
    </Fragment>
  );
};

export default ItemDetail;
