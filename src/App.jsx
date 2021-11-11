import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import CartWidget from './components/CartWidget/CartWidget.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <>
    <Navbar>
    <CartWidget/>
    </Navbar>
    <ItemListContainer greeting="Saludos de prueba" />
    </>
  );
}

export default App;
