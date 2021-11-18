import { useState, Fragment } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = (props) => {
  const [stock, setStock] = useState(props.stock);
  const [initial, setInitial] = useState(Number(props.initial));

  const add = () => {
    if (stock > 1) {
      setStock(stock - 1);
      setInitial(initial + 1);
    }
  };

  const sub = () => {
    if (initial > 0) {
      setStock(stock + 1);
      setInitial(initial - 1);
    }
  };

  return (
    <Fragment>
      <h1>Product: Producto</h1>
      <h2>{initial}</h2>
      {/*<p>Stock: {stock}</p>*/}
      <Button variant="success" onClick={add}>
        Add
      </Button>
      <Button variant="warning" onClick={sub}>
        Sub
      </Button>
    </Fragment>
  );
};

export default ItemCount;
