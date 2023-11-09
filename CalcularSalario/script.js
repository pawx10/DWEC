document.addEventListener("DOMContentLoaded", () => {
    const btnPrecio = document.getElementById("btnPrecio");

    // Bloque de evento
    btnPrecio.addEventListener("click", () => {
        procesarPrecio();
    });

    // Operación DOM de escritura
    function mostrarResultado(salario) {
        const resultadoElemento = document.getElementById("resultado");
        resultadoElemento.textContent = `Salario aproximado: ${salario}`;
    }

    // Operación DOM de lectura
    function obtenerPuesto() {
        return document.getElementById("inputPuesto").value.toLowerCase();
    }

    // Control de errores
    function procesarPrecio() {
        const puesto = obtenerPuesto();
        let salario;

        // Bloque de carga del DOM (defer)

        // Base de datos simulada con switch-case
        switch (puesto) {
            case "dba job":
                salario = 70000;
                break;
            case "front-end developer":
                salario = 45000;
                break;
            case "back-end developer":
                salario = 50000;
                break;
            default:
                salario = "No se encontró información para el puesto ingresado.";
        }

        // Operación DOM de escritura
        mostrarResultado(salario);
    }
});
