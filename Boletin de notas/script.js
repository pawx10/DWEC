// Inicialización de variables
const LISTA_ALUMNOS = [
    { nombre: "juan", calificaciones: [7.5, 8.2, 6.8, 9.1, 9.9, 8.6, 7.3, 8.9, 6.5, 6.8, 7.0, 5.5] },
    { nombre: "emma", calificaciones: [6.4, 7.9, 1.1, 7.2, 3.9, 7.8, 8.3, 7.6, 6.7, 4.5, 4.5, 4.4] },
    { nombre: "miguel", calificaciones: [7.9, 7.6, 9.2, 2.4, 7.8, 8.5, 0.1, 7.9, 8.2, 9.0, 3.8, 4.3] },
    { nombre: "olivia", calificaciones: [7.2, 6.8, 7.9, 6.5, 7.1, 2.9, 7.8, 6.7, 4.3, 6.6, 4.2, 3.7] },
    { nombre: "liam", calificaciones: [1.5, 8.8, 9.2, 9.7, 8.9, 9.4, 9.1, 8.7, 9.3, 8.5, 4.1, 4.0] }
  ];
  
  const NOMBRE_ALUMNO = document.getElementById("nombre-alumno");
  const BOTON_VERIFICAR = document.getElementById("boton-verificar");
  const BOTON_REINICIAR = document.getElementById("boton-reiniciar");
  
  /* -------------------------------------------------------------------------------------------- */
  
  // Event listeners
  BOTON_VERIFICAR.addEventListener("click", (e) => {
    e.preventDefault();
  
    if (verificarEntradaVacia()) {
      alert("Por favor, introduce un nombre válido");
    } else {
      cambiarDiseño();
    }
  });
  
  BOTON_REINICIAR.addEventListener("click", (e) => {
    e.preventDefault();
  
    removerArbolCalificaciones();
  });
  
  /* -------------------------------------------------------------------------------------------- */
  
  // Funciones
  function verificarEntradaVacia() {
    return NOMBRE_ALUMNO.value === "";
  }
  
  function cambiarDiseño() {
    ocultarBotonVerificar();
    crearListaCalificaciones();
    crearBotonesAccion();
    habilitarBoton(BOTON_REINICIAR);
    deshabilitarBoton(BOTON_VERIFICAR);
  }
  
  function ocultarBotonVerificar() {
    BOTON_VERIFICAR.classList.add("boton-desactivado");
  }
  
  function crearListaCalificaciones() {
    const ENCABEZADO_CALIFICACIONES = document.createElement("h4");
    ENCABEZADO_CALIFICACIONES.textContent = "Calificaciones:";
    ENCABEZADO_CALIFICACIONES.id = "encabezado-calificaciones";
    ENCABEZADO_CALIFICACIONES.classList.add("contenedor-calificaciones");
  
    const LISTA_CALIFICACIONES = document.createElement("ul");
    LISTA_CALIFICACIONES.id = "lista-calificaciones";
    LISTA_CALIFICACIONES.classList.add("contenedor-calificaciones");
  
    LISTA_ALUMNOS.forEach((alumno) => {
      if (alumno.nombre.toLowerCase() === NOMBRE_ALUMNO.value.toLowerCase()) {
        alumno.calificaciones.forEach((calificacion) => {
          const ITEM_CALIFICACION = document.createElement("li");
          ITEM_CALIFICACION.textContent = calificacion;
          ITEM_CALIFICACION.classList.add("item-calificacion");
          LISTA_CALIFICACIONES.appendChild(ITEM_CALIFICACION);
        });
      }
    });
  
    document.body.appendChild(ENCABEZADO_CALIFICACIONES);
    document.body.appendChild(LISTA_CALIFICACIONES);
  }
  
  function crearBotonesAccion() {
    crearBotonPromedio();
    crearBotonCalificacionMasAlta();
    crearBotonSuspensos();
  }
  
  function crearBotonPromedio() {
    crearParrafoResultadoEncimaBoton("parrafo-resultado-promedio", "promedio");
    const BOTON_PROMEDIO = generarConfiguracionBoton("boton-promedio", "Calcular Promedio");
    document.body.appendChild(BOTON_PROMEDIO);
  
    crearElementosYEventos("parrafo-resultado-promedio", "boton-promedio", "promedio");
  }
  
  function crearBotonCalificacionMasAlta() {
    crearParrafoResultadoEncimaBoton("parrafo-resultado-calificacion-mas-alta", "calificacion-mas-alta");
    const BOTON_CALIFICACION_MAS_ALTA = generarConfiguracionBoton("boton-calificacion-mas-alta", "Buscar Calificación Más Alta");
    document.body.appendChild(BOTON_CALIFICACION_MAS_ALTA);
  
    crearElementosYEventos("parrafo-resultado-calificacion-mas-alta", "boton-calificacion-mas-alta", "calificacion-mas-alta");
  }
  
  function crearBotonSuspensos() {
    crearParrafoResultadoEncimaBoton("parrafo-resultado-suspensos", "suspensos");
    const BOTON_SUSPENSOS = generarConfiguracionBoton("boton-suspensos", "¿Hay Suspensos?");
    document.body.appendChild(BOTON_SUSPENSOS);
  
    crearElementosYEventos("parrafo-resultado-suspensos", "boton-suspensos", "suspensos");
  }
  
  function crearParrafoResultadoEncimaBoton(id, operacion) {
    const PARRAFO_RESULTADO = document.createElement("p");
    PARRAFO_RESULTADO.id = id;
    PARRAFO_RESULTADO.classList.add("parrafo-resultado");
    PARRAFO_RESULTADO.classList.add("parrafo-resultado-oculto");
  
    switch (operacion) {
      case "promedio":
        PARRAFO_RESULTADO.innerHTML = "Promedio: ";
        break;
      case "calificacion-mas-alta":
        PARRAFO_RESULTADO.innerHTML = "Calificación Más Alta: ";
        break;
      case "suspensos":
        PARRAFO_RESULTADO.innerHTML = "¿Hubo Suspensos? ";
        break;
    }
  
    document.body.appendChild(PARRAFO_RESULTADO);
  }
  
  function generarConfiguracionBoton(id, texto) {
    const BOTON = document.createElement("button");
    BOTON.id = id;
    BOTON.textContent = texto;
    BOTON.classList.add("boton-accion");
    return BOTON;
  }
  
  function crearElementosYEventos(parrafo_id, boton_id, operacion) {
    const PARRAFO = document.getElementById(parrafo_id);
    const BOTON = document.getElementById(boton_id);
  
    BOTON.addEventListener("click", () => {
      switch (operacion) {
        case "promedio":
          if (!PARRAFO.textContent.includes(calcularPromedio())) {
            PARRAFO.classList.remove("parrafo-resultado-oculto");
            PARRAFO.textContent += calcularPromedio();
            deshabilitarBoton(BOTON);
          }
          break;
        case "calificacion-mas-alta":
          if (!PARRAFO.textContent.includes(verificarCalificacionMasAlta())) {
            PARRAFO.classList.remove("parrafo-resultado-oculto");
            PARRAFO.textContent += verificarCalificacionMasAlta();
            deshabilitarBoton(BOTON);
          }
          break;
        case "suspensos":
          if (!PARRAFO.textContent.includes(verificarSuspensos())) {
            PARRAFO.classList.remove("parrafo-resultado-oculto");
            PARRAFO.textContent += verificarSuspensos();
            deshabilitarBoton(BOTON);
          }
          break;
      }
    });
  }
  
  function calcularPromedio() {
    const nombreAlumno = NOMBRE_ALUMNO.value.toLowerCase();
    const alumno = LISTA_ALUMNOS.find((alumno) => alumno.nombre.toLowerCase() === nombreAlumno);
  
    let totalCalificaciones = 0;
  
    for (let i = 0; i < alumno.calificaciones.length; i++) {
      totalCalificaciones += alumno.calificaciones[i];
    }
  
    const PROMEDIO = totalCalificaciones / alumno.calificaciones.length;
    const PROMEDIO_REDONDEADO = PROMEDIO.toFixed(2);
    return PROMEDIO_REDONDEADO;
  }
  
  function verificarCalificacionMasAlta() {
    const nombreAlumno = NOMBRE_ALUMNO.value.toLowerCase();
    const alumno = LISTA_ALUMNOS.find((alumno) => alumno.nombre.toLowerCase() === nombreAlumno);
  
    let calificacionMasAlta = Number.MIN_VALUE;
  
    alumno.calificaciones.forEach(calificacion => {
      if (calificacion > calificacionMasAlta) {
        calificacionMasAlta = calificacion;
      }
    });
  
    return calificacionMasAlta;
  }
  
  function verificarSuspensos() {
    const nombreAlumno = NOMBRE_ALUMNO.value.toLowerCase();
    const alumno = LISTA_ALUMNOS.find((alumno) => alumno.nombre.toLowerCase() === nombreAlumno);
  
    const suspendidos = alumno.calificaciones.filter((calificacion) => calificacion < 5.0);
  
    return suspendidos.length > 0 ? `Suspendidas: ${suspendidos.join(", ")}` : "Ningún suspenso";
  }
  
  function habilitarBoton(boton) {
    boton.removeAttribute("disabled");
  }
  
  function deshabilitarBoton(boton) {
    boton.setAttribute("disabled", "true");
  }
  
  function removerArbolCalificaciones() {
    const encabezadoCalificaciones = document.getElementById("encabezado-calificaciones");
    const listaCalificaciones = document.getElementById("lista-calificaciones");
    const botonPromedio = document.getElementById("boton-promedio");
    const botonCalificacionMasAlta = document.getElementById("boton-calificacion-mas-alta");
    const botonSuspensos = document.getElementById("boton-suspensos");
  
    if (encabezadoCalificaciones) {
      removerSubarbol(encabezadoCalificaciones);
    }
  
    if (listaCalificaciones) {
      removerSubarbol(listaCalificaciones);
    }
  
    reiniciarResultados();
  
    if (botonPromedio) {
      removerSubarbol(botonPromedio);
    }
  
    if (botonCalificacionMasAlta) {
      removerSubarbol(botonCalificacionMasAlta);
    }
  
    if (botonSuspensos) {
      removerSubarbol(botonSuspensos);
    }
  }
  
  function removerSubarbol(elemento) {
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
  }
  
  function reiniciarResultados() {
    reiniciarParrafoResultado("parrafo-resultado-promedio");
    reiniciarParrafoResultado("parrafo-resultado-calificacion-mas-alta");
    reiniciarParrafoResultado("parrafo-resultado-suspensos");
    habilitarBoton(BOTON_VERIFICAR);
    deshabilitarBoton(BOTON_REINICIAR);
  }
  
  function reiniciarParrafoResultado(id) {
    const parrafoResultado = document.getElementById(id);
  
    if (parrafoResultado) {
      parrafoResultado.classList.add("parrafo-resultado-oculto");
      parrafoResultado.textContent = "";
    }
  }
  