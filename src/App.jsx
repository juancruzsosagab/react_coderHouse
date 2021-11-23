import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import CartWidget from "./components/CartWidget/CartWidget.jsx";
/*import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from  './components/ItemCount/ItemCount.jsx';*/
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
    <>
      <Navbar>
        <CartWidget />
      </Navbar>
      {/* <ItemListContainer greeting="Saludos de prueba" />
    <ItemCount stock="5" initial="1" /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
