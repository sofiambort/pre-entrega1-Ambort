import { BsCartPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <input type="text" placeholder="Buscar..." className="barra" />
      <span>0</span>
      <BsCartPlusFill className="carrito" />
      <BsFillPersonFill />
      <IoIosNotificationsOutline />
    </div>
  );
};

export default CartWidget;
