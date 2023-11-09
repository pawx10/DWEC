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

        // Bloque de carga del DOM (defer)

        // Base de datos simulada con array de objetos y filter
        const baseDeDatos = [
            { puesto: "dba job", salario: 70000 },
            { puesto: "front-end developer", salario: 45000 },
            { puesto: "back-end developer", salario: 50000 }
        ];

        const resultado = baseDeDatos.filter(item => item.puesto === puesto);
        let salario = resultado.length > 0 ? resultado[0].salario : "No se encontró información para el puesto ingresado.";

        // Operación DOM de escritura
        mostrarResultado(salario);
    }
});
