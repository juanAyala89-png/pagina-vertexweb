import { useState } from "react";
import Logo from "./Logo.jsx";
import { menu } from "../datos.js";

export default function Encabezado() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header>
      <div className="wrap barra">
        <Logo />
        <nav id="menu" aria-label="Principal" className={abierto ? "abierto" : ""}>
          <ul>
            {menu.map((m) => (
              <li key={m.href}>
                <a href={m.href} onClick={() => setAbierto(false)}>
                  {m.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="/#contacto" className="btn">
          Cotiza tu proyecto
        </a>
        <button
          className="menu-btn"
          aria-controls="menu"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? "Cerrar" : "Menú"}
        </button>
      </div>
    </header>
  );
}
