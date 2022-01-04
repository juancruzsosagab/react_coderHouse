import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import CartWidget from "./components/CartWidget/CartWidget.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
/*import ItemCount from  './components/ItemCount/ItemCount.jsx';*/
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import CartMain from "./components/Cart/Cart.jsx";
import About from "./components/About/About";
import Proyects from "./components/Projects/Projects";
import CheckOutForm from "./components/Cart/CheckOutForm";
import SignIn from "./components/SignIn/SignIn";

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
            <Route path="/about" element={<About />} />
            <Route path="/proyects" element={<Proyects />} />
            <Route
              path="/category"
              element={<ItemListContainer title="Productos" />}
            />
            <Route path="/category/:cat" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartMain />} />
            <Route path="/checkout" element={<CheckOutForm />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
