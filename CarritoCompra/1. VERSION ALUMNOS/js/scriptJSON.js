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
  
    // Función para cargar y mostrar los cursos desde el archivo JSON
    async function cargarCardsDesdeJSON() {
      try {
        const response = await fetch('../data/cursos.json');
        const cards = await response.json();
    
        const listaCursos = document.getElementById('lista-cursos');
        listaCursos.innerHTML = ''; // Limpiar la lista de cursos

        let currentRow;
        cards.forEach((card, index) => {
          if (index % 3 === 0) {
            currentRow = document.createElement('div');
            currentRow.classList.add('row');
            listaCursos.appendChild(currentRow);
          }
    
          const cardHTML = `
            <div class="four columns">
              <div class="card">
                <img src="${card.src}" class="imagen-curso" />
                <div class="info-card">
                  <h4>${card.titulo}</h4>
                  <p>${card.author}</p>
                  <img src="../img/estrellas.png" />
                  <p class="precio">${card.precioAlto} <span class="u-pull-right">${card.precioBajo}</span></p>
                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${card.id}">Agregar Al Carrito</a>
                </div>
              </div>
            </div>
          `;
      
          const cardElement = document.createElement('div');
          cardElement.innerHTML = cardHTML.trim();
          currentRow.appendChild(cardElement.firstChild);
        });
    
        const agregarCarritoBtns = document.querySelectorAll('.agregar-carrito');
        agregarCarritoBtns.forEach(btn => {
          btn.addEventListener('click', function (event) {
            event.preventDefault();
            const curso = event.target.parentElement;
            const id = curso.querySelector('.agregar-carrito').getAttribute('data-id');
            const nombre = curso.querySelector('h4').textContent;
            const precio = curso.querySelector('.precio').textContent;
    
            agregarCursoAlCarrito(id, nombre, precio);
          });
        });
      } catch (error) {
        console.error('Error al cargar las cards:', error);
      }
    }
    
    // Cargar las cards desde el archivo JSON al cargar la página
    cargarCardsDesdeJSON();
    
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
  
