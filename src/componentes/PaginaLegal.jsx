import { Link } from "react-router-dom";
import { CORREO } from "../datos.js";

export default function PaginaLegal({ tag, title, updated, intro, sections }) {
  return (
    <main className="legal">
      <div className="wrap">
        <Link className="volver" to="/">
          ← Volver al inicio
        </Link>
        <span className="etiqueta">{tag.toLowerCase()}</span>
        <h1>{title}</h1>
        <p className="fecha">Última actualización: {updated}</p>
        <p className="intro">{intro}</p>

        {sections.map((s, i) => (
          <section key={s.heading}>
            <h2>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {s.heading}
            </h2>
            {s.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.list && (
              <ul>
                {s.list.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            )}
            {s.after?.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}

        <p className="dudas">
          ¿Dudas? Escríbenos a <a href={`mailto:${CORREO}`}>{CORREO}</a>
        </p>
      </div>
    </main>
  );
}
