import { useState } from "react";
import {
  CORREO,
  FACEBOOK,
  linkWhatsApp,
  temas,
  cinta,
  servicios,
  revision,
  seguridad,
  pasos,
  preguntas,
  opcionesFormulario,
} from "../datos.js";

function Portada() {
  return (
    <div className="wrap portada">
      <span className="saludo mano">¡hola! somos Vertex.web</span>
      <h1>
        Tu idea merece ser{" "}
        <span className="circulo">
          software real.
          <svg viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M20 55 C 30 10, 260 5, 285 45 C 300 80, 120 98, 40 82 C 5 72, 10 40, 60 25"
              fill="none"
              stroke="#e2552b"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>
      <p className="intro">
        <strong>En semanas, no en meses.</strong> Diseñamos, construimos y lanzamos páginas web, apps e
        inteligencia artificial para tu negocio. Tú nos cuentas la idea; nosotros la volvemos algo que tus
        clientes puedan usar.
      </p>
      <div className="acciones">
        <a href="#contacto" className="btn">
          Empieza hoy →
        </a>
        <a href="#servicios" className="btn claro">
          Ver servicios
        </a>
      </div>

      <div className="nota" aria-hidden="true">
        La primera asesoría es sin costo. Platicamos y tú decides :)
      </div>
      <svg className="flecha" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
        <path d="M5 10 C 40 60, 80 50, 110 20" />
        <path d="M95 18 L110 20 L106 34" />
      </svg>
    </div>
  );
}

function Cinta() {
  // se repite dos veces para que el movimiento sea continuo
  const items = [...cinta, ...cinta];
  return (
    <div className="cinta" aria-hidden="true">
      <div className="cinta-track">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function Servicios() {
  return (
    <section id="servicios">
      <div className="wrap">
        <span className="etiqueta">lo que construimos</span>
        <h2>
          Lo que necesites, <br />
          de la idea al lanzamiento.
        </h2>
        <p className="sub">
          Cuéntanos qué quieres construir. Nosotros nos encargamos del resto, desde el diseño hasta que ya está
          funcionando.
        </p>

        <div className="servicios">
          {servicios.map((s) => (
            <article key={s.titulo} className={`tarjeta ${s.estilo}`.trim()}>
              <span className="num">{s.num}</span>
              {s.estilo === "ancha" ? (
                <div>
                  <h3>{s.titulo}</h3>
                  <p>{s.texto}</p>
                </div>
              ) : (
                <>
                  <h3>{s.titulo}</h3>
                  <p>{s.texto}</p>
                </>
              )}
              {s.lista && (
                <ul>
                  {s.lista.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              )}
              {s.etiquetas && (
                <div className="etiquetas">
                  {s.etiquetas.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              )}
              {s.nota && <span className="mano">{s.nota}</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Seguridad() {
  return (
    <section id="seguridad" className="seguridad">
      <div className="wrap">
        <div className="seg-grid">
          <div className="revision" aria-hidden="true">
            <span className="mano">revisión de tunegocio.com</span>
            <ul>
              {revision.map((r) => (
                <li key={r.que}>
                  {r.que} <b>{r.estado}</b>
                </li>
              ))}
            </ul>
            <small>así te entregamos cada proyecto ✓</small>
          </div>

          <div>
            <span className="etiqueta">seguridad y legal</span>
            <h2>Seguro y en regla.</h2>
            <p className="sub">
              Tu página o app sale al mundo protegida y con sus documentos legales listos. No tienes que buscar
              abogados ni expertos en seguridad por tu cuenta: de eso nos encargamos nosotros.
            </p>
          </div>
        </div>

        <div className="seg-items">
          {seguridad.map((s) => (
            <article key={s.titulo} className="seg-item">
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
              <ul>
                {s.lista.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  return (
    <section id="proceso" className="proceso">
      <div className="wrap">
        <span className="etiqueta">cómo trabajamos</span>
        <h2>De la idea al lanzamiento.</h2>
        <p className="sub">
          Un proceso claro, con avances que puedes ver desde el primer día. Siempre sabes en qué paso vamos y qué
          sigue.
        </p>

        <div className="pasos">
          {pasos.map((p, i) => (
            <div key={p.titulo} className="paso">
              <span className="n">{i + 1}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
              <span className="tiempo">{p.cuando}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  return (
    <section id="por-que">
      <div className="wrap">
        <span className="etiqueta">por qué nosotros</span>
        <h2>
          Un solo equipo, <br />
          sin vueltas.
        </h2>
        <p className="sub">
          Diseño, programación, IA y lanzamiento con la misma gente de principio a fin. No te pasamos de mano en
          mano.
        </p>

        <div className="dos">
          <div className="caja a">
            <span className="mano">tú decides</span>
            <h3>Tú sigues al mando.</h3>
            <p>Apruebas cada paso y ves el avance conforme va. Sin sorpresas y sin letras chiquitas.</p>
          </div>
          <div className="caja b">
            <span className="mano">nosotros ejecutamos</span>
            <h3>Nosotros hacemos el trabajo.</h3>
            <p>
              Tú te enfocas en tu negocio. Nosotros nos encargamos de lo técnico y te explicamos todo sin palabras
              raras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" style={{ paddingTop: 10 }}>
      <div className="wrap">
        <span className="etiqueta">lo que siempre nos preguntan</span>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          {preguntas.map((q) => (
            <details key={q.p}>
              <summary>{q.p}</summary>
              <p>{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const [datos, setDatos] = useState({ nombre: "", negocio: "", necesito: opcionesFormulario[0], mensaje: "" });
  const cambiar = (e) => setDatos({ ...datos, [e.target.name]: e.target.value });

  // arma un correo con lo que escribió la persona
  function enviar(e) {
    e.preventDefault();
    const asunto = `Quiero cotizar: ${datos.necesito}`;
    const cuerpo =
      `Hola Vertex.web, soy ${datos.nombre}` +
      (datos.negocio ? ` de ${datos.negocio}` : "") +
      `.\nNecesito: ${datos.necesito}` +
      (datos.mensaje ? `\n\n${datos.mensaje}` : "");
    window.location.href = `mailto:${CORREO}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  }

  return (
    <section id="contacto" className="contacto">
      <div className="wrap contacto-grid">
        <div>
          <span className="etiqueta">¿empezamos?</span>
          <h2>¿Qué quieres construir?</h2>
          <p className="sub">
            Mándanos un mensaje con tu idea y te respondemos con una propuesta. La primera asesoría es sin costo.
          </p>
          <div className="canales">
            <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="canal-wa">
              <span>Mándanos WhatsApp</span>
              <span>→</span>
            </a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
              <span>Escríbenos en Facebook</span>
              <span>→</span>
            </a>
            <a href={`mailto:${CORREO}`}>
              <span>{CORREO}</span>
              <span>→</span>
            </a>
          </div>
          <div className="chips">
            {temas.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <form onSubmit={enviar}>
          <label htmlFor="nombre">¿Cómo te llamas?</label>
          <input id="nombre" name="nombre" required autoComplete="name" value={datos.nombre} onChange={cambiar} />

          <label htmlFor="negocio">¿Cómo se llama tu negocio?</label>
          <input id="negocio" name="negocio" value={datos.negocio} onChange={cambiar} />

          <label htmlFor="necesito">¿Qué necesitas?</label>
          <select id="necesito" name="necesito" value={datos.necesito} onChange={cambiar}>
            {opcionesFormulario.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>

          <label htmlFor="mensaje">Cuéntanos tu idea</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="A qué te dedicas, qué te gustaría lograr…"
            value={datos.mensaje}
            onChange={cambiar}
          />

          <button type="submit" className="btn">
            Enviar mensaje
          </button>
          <small>Se abre tu correo con el mensaje listo para mandar.</small>
        </form>
      </div>
    </section>
  );
}

export default function Inicio() {
  return (
    <main>
      <Portada />
      <Cinta />
      <Servicios />
      <Seguridad />
      <Proceso />
      <PorQue />
      <Preguntas />
      <Contacto />
    </main>
  );
}
