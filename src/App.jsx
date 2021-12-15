import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import CartWidget from "./components/CartWidget/CartWidget.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
/*import ItemCount from  './components/ItemCount/ItemCount.jsx';*/
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Cartxample from "./components/Cart/Cart.jsx";


function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar>
            <CartWidget />
          </Navbar>
          <Routes>
            <Route path="/" element={<ItemListContainer title="Productos" />} />
            <Route path="/category/:cat" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cartxample />} />
          </Routes>
          {/* <ItemListContainer greeting="Saludos de prueba" />
    <ItemCount stock="5" initial="1" /> */}
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
