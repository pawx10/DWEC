function obtenerArchivoTxt() {
    fetch('datos.txt')
      .then(response => response.text())
      .then(data => {
        // Actualizar el contenido del div con el texto del archivo
        document.getElementById('contenidoTxt').innerText = data;
      })
      .catch(error => console.error('Error al obtener el archivo TXT:', error));
  }
  
  function obtenerJsonEmpleado() {
    fetch('empleado.json') // Ruta al archivo JSON
      .then(response => response.json()) // Parsear la respuesta a JSON
      .then(data => {
        // Actualizar el contenido del div con el JSON del empleado
        const contenidoObjeto = document.getElementById('contenidoObjeto');
        contenidoObjeto.innerHTML = `
          <p>ID: ${data.id}</p>
          <p>Nombre: ${data.nombre}</p>
          <p>Empresa: ${data.empresa}</p>
          <p>Trabajo: ${data.trabajo}</p>
        `;
      })
      .catch(error => console.error('Error al obtener el archivo JSON:', error));
  }
  
  function obtenerListaEmpleados() {
    fetch('empleados.json') // Ruta al archivo JSON de la lista de empleados
      .then(response => response.json()) // Parsear la respuesta a JSON
      .then(data => {
        // Mostrar los datos de los empleados en el div correspondiente
        const contenidoListaEmpleados = document.getElementById('contenidoListaEmpleados');
        contenidoListaEmpleados.innerHTML = '';
  
        data.forEach(empleado => {
          const empleadoHTML = `
            <div>
              <p>ID: ${empleado.id}</p>
              <p>Nombre: ${empleado.nombre}</p>
              <p>Empresa: ${empleado.empresa}</p>
              <p>Trabajo: ${empleado.trabajo}</p>
            </div>
            <hr>
          `;
          contenidoListaEmpleados.innerHTML += empleadoHTML;
        });
      })
      .catch(error => console.error('Error al obtener la lista de empleados:', error));
  }
  

  function obtenerListaDeImagenes() {
    fetch('https://picsum.photos/list')
      .then(response => response.json())
      .then(data => {
        const contenidoImagenes = document.getElementById('contenidoImagenes');
        contenidoImagenes.innerHTML = '';
  
        data.forEach(imagen => {
          const imagenHTML = `
            <div>
              <p>ID: ${imagen.id}</p>
              <p>Autor: ${imagen.author}</p>
              <p>Ancho: ${imagen.width}</p>
              <p>Alto: ${imagen.height}</p>
              <img src="https://picsum.photos/id/${imagen.id}/200/200" alt="Imagen ${imagen.id}">
            </div>
            <hr>
          `;
          contenidoImagenes.innerHTML += imagenHTML;
        });
      })
      .catch(error => console.error('Error al obtener la lista de imágenes:', error));
  }
  

  

  

  function mostrarError(errorMessage) {
    contenedorPromesa.innerHTML = `<h2>Error: ${errorMessage}</h2>`;
  }