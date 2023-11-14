const NOTAS_PABLO = [];

function cargarNotas() {
  for (let i = 0; i < 10; i++) {
    const nota = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    NOTAS_PABLO.push(nota);
  }

  mostrarNotas();
  habilitarBoton("boton-borrar");
  habilitarBotonesEstadisticas();
}

function borrarNotas() {
  NOTAS_PABLO.length = 0;
  mostrarNotas();
  deshabilitarBoton("boton-borrar");
  reiniciarEstadisticas();
}

function mostrarNotas() {
  const lista = document.getElementById("notas-lista");
  lista.innerHTML = "";

  for (const nota of NOTAS_PABLO) {
    const item = document.createElement("li");
    item.textContent = nota;
    lista.appendChild(item);
  }
}

function mostrarMedia() {
  const mediaTexto = document.getElementById("media-texto");
  mediaTexto.textContent = `Media: ${calcularMedia()}`;
}

function mostrarSuspensos() {
  const suspensosTexto = document.getElementById("suspensos-texto");
  suspensosTexto.textContent = `Suspensos: ${obtenerSuspensos()}`;
}

function mostrarNotaMasAlta() {
  const notaMasAltaTexto = document.getElementById("nota-mas-alta-texto");
  notaMasAltaTexto.textContent = `Nota Más Alta: ${calcularNotaMasAlta()}`;
}

function habilitarBoton(id) {
  const boton = document.getElementById(id);
  boton.removeAttribute("disabled");
}

function deshabilitarBoton(id) {
  const boton = document.getElementById(id);
  boton.setAttribute("disabled", "true");
}

function habilitarBotonesEstadisticas() {
  habilitarBoton("boton-media");
  habilitarBoton("boton-suspensos");
  habilitarBoton("boton-nota-mas-alta");
}

function reiniciarEstadisticas() {
  const mediaTexto = document.getElementById("media-texto");
  const suspensosTexto = document.getElementById("suspensos-texto");
  const notaMasAltaTexto = document.getElementById("nota-mas-alta-texto");

  mediaTexto.textContent = "";
  suspensosTexto.textContent = "";
  notaMasAltaTexto.textContent = "";

  deshabilitarBoton("boton-media");
  deshabilitarBoton("boton-suspensos");
  deshabilitarBoton("boton-nota-mas-alta");
}

function calcularMedia() {
  const sum = NOTAS_PABLO.reduce((total, nota) => total + nota, 0);
  return (sum / NOTAS_PABLO.length).toFixed(2);
}

function obtenerSuspensos() {
  return NOTAS_PABLO.filter((nota) => nota < 5).join(", ") || "Ninguno";
}

function calcularNotaMasAlta() {
  return Math.max(...NOTAS_PABLO);
}
