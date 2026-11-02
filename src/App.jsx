import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Encabezado from "./componentes/Encabezado.jsx";
import Pie from "./componentes/Pie.jsx";
import Inicio from "./componentes/Inicio.jsx";
import PaginaLegal from "./componentes/PaginaLegal.jsx";
import BotonWhatsApp from "./componentes/BotonWhatsApp.jsx";
import { privacidad, terminos } from "./legal.js";

// Al cambiar de página sube al inicio; si hay #ancla, baja hasta esa sección
function ControlScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ControlScroll />
      <Encabezado />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/privacidad" element={<PaginaLegal {...privacidad} />} />
        <Route path="/terminos" element={<PaginaLegal {...terminos} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Pie />
      <BotonWhatsApp />
    </>
  );
}
