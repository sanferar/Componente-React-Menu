import React from "react";
import "../hojas-estilo/__reset.css";
import "../hojas-estilo/componente_menu.css";
import { BsList } from "react-icons/bs";
import { useState } from "react";

function Menu({item1, item2, item3, item4}) {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div className="contenedor__menu">
      <div className="contenedor__menu__assets">

        <img
          className="contenedor__menu__logo"
          src={require("../imagenes/logo.png")}
          alt="logotipo"
        />

        <BsList
          className={`icono-ham ${mostrarMenu ? "icon-ham-rotate" : ""}`}
          id="icono-ham-click"
          onClick={toggleMenu}
        />
      </div>

      <ul className={`${mostrarMenu ? "contenedor__menu__ul--activo" : "contenedor__menu__ul"}`}>
        <li className="contenedor__menu__ul__li">
          <a href=""> {item1} </a>
        </li>
        <li className="contenedor__menu__ul__li">
          <a href=""> {item2} </a>
        </li>
        <li className="contenedor__menu__ul__li">
          <a href=""> {item3} </a>
        </li>
        <li className="contenedor__menu__ul__li">
          <a href=""> {item4} </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
