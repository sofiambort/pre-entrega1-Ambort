import CartWidget from "../common/cartWidget/CartWidget";
import "./Navbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://res.cloudinary.com/duu1rotxg/image/upload/v1695576333/logo_wqbusk.png"
        alt="logo del website"
      />
      <ul>
        <li>INTERIOR</li>
        <li>EXTERIORES</li>
        <li>MANTENIMIENTO</li>
        <li>DECORATIVO</li>
        <li>CONTACTO</li>
      </ul>
      <CartWidget />
    </div>
  );
}
