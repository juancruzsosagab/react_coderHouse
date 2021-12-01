import { useState, Fragment } from "react";
import Button from 'react-bootstrap/Button';



const ItemCount = ({ itemStock, initial, onAdd }) => {
  const [stock, setStock] = useState(itemStock);
  const [counter, setCounter] = useState(Number(initial));

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
      <h2>Cantidad: {counter}</h2>
      {/*<p>Stock: {stock}</p>*/}
      <Button variant="success" onClick={add}>
        Add
      </Button>
      <Button variant="danger" onClick={sub}>
        Sub
      </Button>
      <Button variant="primary" onClick={() => onAdd(counter)}>
        Agregar al carro
      </Button>
    </Fragment>
  );
};

export default ItemCount;
