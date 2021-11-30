import { useState, Fragment } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = (props) => {
  const [stock, setStock] = useState(props.stock);
  const [counter, setCounter] = useState(Number(props.initial));

  const add = () => {
    if (stock > 1) {
      setStock(stock - 1);
      setCounter(counter + 1);
    }
  };

  const sub = () => {
    if (counter > 0) {
      setStock(stock + 1);
      setCounter(counter - 1);
    }
  };

  return (
    <Fragment>
      <h1>Product: Producto</h1>
      <h2>{counter}</h2>
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
