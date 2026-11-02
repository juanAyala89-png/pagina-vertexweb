import { linkWhatsApp } from "../datos.js";

// Botón flotante de WhatsApp con su notita escrita a mano
export default function BotonWhatsApp() {
  return (
    <a
      className="wa-flotante"
      href={linkWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <span className="wa-nota mano" aria-hidden="true">
        ¿platicamos?
        <svg viewBox="0 0 60 30" width="46" height="24">
          <path d="M4 6 C 22 4, 40 10, 52 22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M42 22 L53 23 L50 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="wa-burbuja">
        <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.5.7 4.8 2 6.8L3.2 29l6.8-2c1.9 1.1 4 1.6 6.1 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.2c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4 1.2 1.2-3.9-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.7C5.4 9.8 10.2 5.2 16 5.2s10.5 4.6 10.5 10.4S21.8 26.2 16 26.2zm5.8-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1s0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.7 1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.5 4.9 2.7 1.1 3.2.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"
          />
        </svg>
        <span className="wa-texto">WhatsApp</span>
      </span>
    </a>
  );
}
