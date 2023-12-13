// functions.js

export function vaciarCarrito(carritoContainer) {
  carritoContainer.textContent = '';
}

export function actualizarCarrito(carrito, carritoContainer) {
  carritoContainer.textContent = '';

  carrito.forEach((curso) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${curso.imagen}" width="100"></td>
      <td>${curso.nombre}</td>
      <td>${curso.precio}</td>
      <td>${curso.cantidad}</td>
      <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
    `;
    carritoContainer.appendChild(row);
  });

  guardarCarritoLocalStorage(carrito);
}

export function guardarCarritoLocalStorage(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

export function obtenerCarritoLocalStorage() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}

export function obtenerInfoCurso(curso) {
  return {
    imagen: curso.querySelector('.imagen-curso').src,
    nombre: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
  };
}

export function agregarCursoAlCarrito(curso, carrito) {
  let cursoEnCarrito = carrito.find((c) => c.id === curso.id);

  if (cursoEnCarrito) {
    cursoEnCarrito.cantidad++;
  } else {
   
    curso.cantidad = 1;
    carrito.push(curso);
    
  }

  actualizarCarrito(carrito, document.getElementById('lista-carrito').getElementsByTagName('tbody')[0]);
}