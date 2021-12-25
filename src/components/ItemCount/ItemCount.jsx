import { useState, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Button from "react-bootstrap/Button";

const ItemCount = ({ itemStock, initial, item }) => {
  const [stock, setStock] = useState(itemStock);
  const [counter, setCounter] = useState(Number(initial));
  const [compra, setCompra] = useState(false);
  const { addItem } = useContext(CartContext);
  

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

  const onAdd = () => {
    setCompra(true);

    addItem(item, counter);
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

      {compra ? (
        <>
          <Link to={`/`}>
            <input type="button" value="Seguir comprando" />
          </Link>
          <Link to={`/cart`}>
            <input type="button" value="Ir al carro de compras" />
          </Link>
        </>
      ) : (
        <Button variant="primary" onClick={() => onAdd(counter)}>
          Agregar al carro
        </Button>
      )}
    </Fragment>
  );
};

export default ItemCount;
