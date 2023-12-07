// script.js

import {
  vaciarCarrito,
  actualizarCarrito,
  guardarCarritoLocalStorage,
  obtenerCarritoLocalStorage,
  obtenerInfoCurso,
  agregarCursoAlCarrito,
} from './functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
  const cardsContainer = document.getElementById('lista-cursos');
  const carritoContainer = document.getElementById('lista-carrito').getElementsByTagName('tbody')[0];

  let carrito = obtenerCarritoLocalStorage() || [];

  vaciarCarritoBtn.addEventListener('click', () => {
    vaciarCarrito(carritoContainer);
    carrito = [];
    guardarCarritoLocalStorage(carrito);
  });

  carritoContainer.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('borrar-curso')) {
      const cursoId = event.target.getAttribute('data-id');
      carrito = carrito.filter((curso) => curso.id !== cursoId);
      actualizarCarrito(carrito, carritoContainer);
    }
  });

  vaciarCarritoBtn.addEventListener('click', () => {
    carrito = [];
    actualizarCarrito(carrito, carritoContainer);
  });

  cardsContainer.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('agregar-carrito')) {
      const curso = event.target.parentElement.parentElement;
      const infoCurso = obtenerInfoCurso(curso);
      agregarCursoAlCarrito(infoCurso, carrito);
    }
  });

});
