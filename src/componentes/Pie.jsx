import { Link } from "react-router-dom";
import { CORREO } from "../datos.js";

export default function Pie() {
  return (
    <footer>
      <div className="wrap pie">
        <span>© {new Date().getFullYear()} Vertex.web</span>
        <nav aria-label="Legal">
          <Link to="/privacidad">Aviso de privacidad</Link>
          <Link to="/terminos">Términos y condiciones</Link>
          <a href={`mailto:${CORREO}`}>{CORREO}</a>
        </nav>
        <span className="mano">gracias por llegar hasta aquí ✌</span>
      </div>
    </footer>
  );
}
