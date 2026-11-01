import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Vertex.web, inicio">
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 6 L16 27 L28 6" />
        <path d="M11 6 L16 15 L21 6" stroke="#e2552b" />
      </svg>
      <span>
        Vertex<em>.web</em>
      </span>
    </Link>
  );
}
