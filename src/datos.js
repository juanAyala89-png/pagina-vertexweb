// Aquí están los datos que más vas a querer cambiar.

export const CORREO = "vertexweb.lab@gmail.com";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61595712540814";

export const menu = [
  { href: "/#servicios", texto: "Servicios" },
  { href: "/#seguridad", texto: "Seguridad" },
  { href: "/#proceso", texto: "Proceso" },
  { href: "/#por-que", texto: "Por qué nosotros" },
  { href: "/#contacto", texto: "Contacto" },
];

export const temas = ["Web", "Apps", "IA", "Chatbots", "Automatización", "Seguridad", "Legal"];

export const cinta = ["Páginas web", "Apps móviles", "IA", "Chatbots", "Automatización", "Seguridad", "Legal"];

// estilo: "grande" | "ladeada" | "ladeada-2" | "ancha" | "" (normal)
export const servicios = [
  {
    num: "01 · Web",
    titulo: "Páginas web",
    texto: "Sitios rápidos y bonitos que se ven bien en el celular y que convierten visitas en clientes. Hechos para tu marca, no sacados de una plantilla.",
    lista: ["Diseño a medida", "Listas para aparecer en Google (SEO)", "Te ayudamos con tu dominio", "Perfectas en celular"],
    nota: "por aquí empieza casi todo ↓",
    estilo: "grande",
  },
  {
    num: "02 · Móvil",
    titulo: "Apps móviles",
    texto: "Apps para Android y iPhone: reservas, pedidos, tiendas, citas o lo que tu negocio necesite.",
    etiquetas: ["Android", "iOS", "Panel admin"],
    estilo: "ladeada",
  },
  {
    num: "03 · IA",
    titulo: "IA para tu negocio",
    texto: "Conectamos inteligencia artificial a tus procesos para responder, recomendar y vender más.",
    etiquetas: ["Asistentes", "Análisis", "Integraciones"],
    estilo: "",
  },
  {
    num: "04 · Chat",
    titulo: "Chatbots",
    texto: "Atienden a tus clientes a cualquier hora en WhatsApp, Messenger o tu web. Responden dudas y agendan citas por ti.",
    etiquetas: ["WhatsApp", "Messenger", "Web"],
    estilo: "",
  },
  {
    num: "05 · Auto",
    titulo: "Automatización",
    texto: "Lo repetitivo, que lo haga la computadora: facturas, reportes, recordatorios y seguimiento de clientes.",
    etiquetas: ["Flujos", "Reportes", "CRM"],
    estilo: "ladeada-2",
  },
  {
    num: "06 · Ventas",
    titulo: "Landing pages",
    texto: "Páginas con una sola misión, pensadas para tus anuncios de Facebook e Instagram y hechas para vender.",
    etiquetas: ["Anuncios", "Formularios", "Métricas"],
    estilo: "ancha",
  },
];

export const revision = [
  { que: "Certificado SSL (https)", estado: "seguro" },
  { que: "Inyección SQL", estado: "protegido" },
  { que: "Ataques XSS", estado: "protegido" },
  { que: "Accesos y contraseñas", estado: "protegido" },
  { que: "Términos · Privacidad · Cookies", estado: "listos" },
];

export const seguridad = [
  {
    titulo: "Documentos legales",
    texto: "Redactamos los textos legales que tu página o app necesita para operar con tranquilidad.",
    lista: ["Términos y condiciones", "Aviso de privacidad", "Política de cookies", "Términos de uso para apps"],
  },
  {
    titulo: "Pruebas de seguridad",
    texto: "Nuestro equipo de pentesting pone a prueba tu página o app como lo haría un atacante, para encontrar las fallas y corregirlas antes de que alguien más las encuentre.",
    lista: ["Pruebas de penetración", "Análisis de vulnerabilidades", "Reporte con correcciones", "Revisiones periódicas"],
  },
];

export const pasos = [
  { titulo: "Nos cuentas tu idea", texto: "Platicamos de tu negocio, tus clientes y lo que quieres lograr. Te damos una propuesta clara, con tiempos y precio.", cuando: "Día 1" },
  { titulo: "Diseñamos", texto: "Ves cómo va a lucir tu web o app antes de programar una sola línea, y la ajustamos contigo.", cuando: "Semana 1" },
  { titulo: "Construimos", texto: "Programamos todo lo de atrás, las integraciones y la IA si la necesitas. Y automatizamos lo repetitivo.", cuando: "Semanas 2 a 4" },
  { titulo: "Lo lanzamos", texto: "Publicamos, medimos y te enseñamos a usarlo. Después seguimos contigo para mejorarlo.", cuando: "Lanzamiento" },
];

export const preguntas = [
  {
    p: "¿Cuánto cuesta?",
    r: "Depende de lo que quieras construir: no es lo mismo una página de presentación que una app con pedidos. Después de la primera plática (que es sin costo) te mandamos una propuesta por escrito con el alcance, el precio y los tiempos.",
  },
  {
    p: "¿Cuánto tarda?",
    r: "Normalmente semanas, no meses. En la primera semana ya ves el diseño y de la semana 2 a la 4 lo construimos. Lo que más ayuda a ir rápido es que tengas a la mano tus textos, fotos y respuestas.",
  },
  {
    p: "¿El proyecto queda a mi nombre?",
    r: "Sí. Al terminar de pagar el proyecto, los derechos sobre lo que te entregamos son tuyos, salvo que la propuesta diga otra cosa.",
  },
  {
    p: "¿Le pueden hacer pruebas de seguridad a cualquier página?",
    r: "No. Solo hacemos pruebas sobre sistemas cuyo dueño nos autoriza por escrito, con un alcance y fechas definidos. Lo que encontramos se lo entregamos únicamente a ese cliente.",
  },
  {
    p: "¿Los documentos legales sustituyen a un abogado?",
    r: "Para la mayoría de las páginas y apps son suficientes, porque los adaptamos a tu negocio. Si tu caso es complejo o está muy regulado, te recomendamos que un abogado los revise.",
  },
];

export const opcionesFormulario = [
  "Página web",
  "App móvil",
  "IA o chatbot",
  "Automatización",
  "Landing page para anuncios",
  "Tienda en línea",
  "Todavía no sé, quiero orientación",
];
