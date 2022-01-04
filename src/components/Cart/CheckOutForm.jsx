import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./index.css";

const CheckOutForm = () => {
  const { cart, total } = useContext(CartContext);
  const [userData, setUserData] = useState({});
  const [errorValidate, setErrorValidate] = useState("");

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validateFields = (user) => {
    if (!user.nombreApellido || !user.telefono || !user.email || !user.email2) {
      setErrorValidate("Todos los campos son obligatorios");
      return false;
    } else if (user.email !== user.email2) {
      setErrorValidate("Los emails debe ser iguales");
      return false;
    } else {
      setErrorValidate("");
      return true;
    }
  };

  const sendOrder = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (validateFields(userData)) {
      const newOrder = {
        buyer: {
          name: userData.nombreApellido,
          phone: userData.telefono,
          email: userData.email,
        },
        items: cart,
        date: new Date(),
        total: total,
      };

      const db = getFirestore();
      const ref = collection(db, "orders");

      addDoc(ref, newOrder).then(({ id }) => alert(`Tu compra ha sido exitosa. Tu order ID es ${id}`));
    }
  };

  return (
    <>
      <Form onSubmit={sendOrder}>
        {errorValidate && <h2 className="error">{errorValidate}</h2>}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresá nombre y apellido"
            onChange={onChange}
            name="nombreApellido"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresá tu teléfono"
            onChange={onChange}
            name="telefono"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={onChange}
            name="email"
          />
          <Form.Text className="text-muted">Ingresá tu email.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={onChange}
            name="email2"
          />
          <Form.Text className="text-muted">
            Ingresá tu email de nuevo!
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Realizar compra
        </Button>
      </Form>
    </>
  );
};

export default CheckOutForm;
