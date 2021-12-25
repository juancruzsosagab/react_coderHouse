import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About us</Link>
      </li>
      <li>
        <Link to="/">Projects</Link>
      </li>
      <li>
        <div className="dropdown1">
          <Link to="/" className="dropbtn">
            Categorías
          </Link>
          <div className="dropdown1-content">
            <Link to="/category/1">Type 1</Link>
            <Link to="/category/2">Type 2</Link>
            <Link to="/category/3">Type 3</Link>
          </div>
        </div>
      </li>
      <li className="brand-name">
        <Link to="/cart">{props.children}</Link>
      </li>
    </ul>
  );
};

export default Navbar;
