import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <ul>
      <li>
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" activeclassname="active">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink to="/proyects" activeclassname="active">
          Projects
        </NavLink>
      </li>
      <li>
        <div className="dropdown1">
          <NavLink to="/category" className="dropbtn" activeclassname="active">
            Categorías
          </NavLink>
          <div className="dropdown1-content">
            <NavLink to="/category/1" activeclassname="active">
              Type 1
            </NavLink>
            <NavLink to="/category/2" activeclassname="active">
              Type 2
            </NavLink>
            <NavLink to="/category/3" activeclassname="active">
              Type 3
            </NavLink>
          </div>
        </div>
      </li>
      <li className="brand-name">
        <NavLink to="/cart" activeclassname="active">
          {props.children}
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
