import "./Home.css";
import { useState } from "react";

export function Home() {
  const [counter, setCounter] = useState(0);

  function sumar() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <img
        className="portada"
        src="https://res.cloudinary.com/duu1rotxg/image/upload/v1695585347/Imagen_de_WhatsApp_2023-09-24_a_las_15.33.06_sdsivr.jpg"
        alt=""
      />
      <button className="agregar-carrito" onClick={sumar}>
        Agregar al carrito
      </button>
      <span className="agregado">{counter}</span>
    </div>
  );
}
