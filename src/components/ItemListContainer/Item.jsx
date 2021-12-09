import { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = ({ id, title, price, pictureUrl, description }) => {
  return (
    <Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <span>
              $ {price} <br /> {description}
            </span>
          </Card.Text>
          <Link to={`/product/${id}`}>
            <Button variant="primary">Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Item;
