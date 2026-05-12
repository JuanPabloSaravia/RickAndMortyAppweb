# Rick and Morty Explorer

Aplicación web de una sola página (SPA) que consume la API pública de Rick and Morty. Permite explorar personajes de la serie mediante tarjetas, búsqueda, filtros combinables y paginación. El proyecto está hecho sin frameworks, usando solo HTML, CSS y JavaScript.

## Descripción del proyecto

La aplicación muestra los personajes de Rick and Morty con la información principal: imagen, nombre, estado, especie, género y origen. La experiencia incluye:

- Carga inicial de los primeros 20 personajes.
- Navegación entre páginas con botones "Anterior" y "Siguiente".
- Visualización del número de página actual y el total de páginas.
- Búsqueda de personajes por nombre.
- Filtros combinables por estado, género y especie.
- Diseño responsivo para escritorio y dispositivos móviles.

## Integrante
- Juan Pablo Saravia


## Estructura del proyecto

- `index.html` - Página principal con la estructura semántica.
- `CSS/styles.css` - Estilos del proyecto, diseño responsivo y temas oscuros.
- `JS/api.js` - Funciones que consultan la API de Rick and Morty.
- `JS/ui.js` - Funciones que renderizan las tarjetas, la paginación y los mensajes de error.
- `JS/main.js` - Lógica principal de la aplicación, gestión del estado y eventos.
- `.gitignore` - Archivos y carpetas excluidos del control de versiones.

## Tecnologías utilizadas
- HTML5 semántico: `header`, `main`, `section`, `article`, `footer`.
- CSS separado en archivo externo.
- JavaScript moderno con módulos ES, `fetch`, `async/await` y organización en funciones.
- API pública: Rick and Morty API.

## Cómo ejecutar el proyecto localmente

1. Abrir `index.html` directamente en un navegador moderno.
2. O bien usar un servidor local:
   - Con Visual Studio Code y la extensión Live Server.
   - Con un servidor simple desde la terminal.

## Funcionalidades principales

- Listado de personajes en tarjetas con la imagen, estado, especie, género y origen.
- Indicador de estado con color: verde para `Alive`, rojo para `Dead`, gris para `unknown`.
- Paginación funcional con botones que se deshabilitan cuando no hay más páginas.
- Búsqueda de personajes por nombre.
- Filtros por estado, género y especie que se combinan entre sí.
- Mensajes de error claros cuando no se encuentran resultados o falla la API.

## API utilizada

- Rick and Morty API: https://rickandmortyapi.com/
