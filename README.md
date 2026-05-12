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

## Integrantes
- Nombre del alumno 1
- Nombre del alumno 2 (opcional)

## Estructura del proyecto

- `index.html` - Página principal con la estructura semántica.
- `CSS/styles.css` - Estilos del proyecto, diseño responsivo y temas oscuros.
- `JS/api.js` - Funciones que consultan la API de Rick and Morty.
- `JS/ui.js` - Funciones que renderizan las tarjetas, la paginación y los mensajes de error.
- `JS/main.js` - Lógica principal de la aplicación, gestión del estado y eventos.
- `integrantes.txt` - Nombres de los integrantes del trabajo.
- `ia-copilot-preguntas-respuestas.txt` - Registro de preguntas y respuestas con la IA.
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

### Ejemplo de servidor local con Python

```bash
cd "c:/Users/Administrador/Documents/DSW/Prog2/RickAndMortyAppweb"
python -m http.server 5500
```

Luego abrir `http://localhost:5500` en el navegador.

## Funcionalidades principales

- Listado de personajes en tarjetas con la imagen, estado, especie, género y origen.
- Indicador de estado con color: verde para `Alive`, rojo para `Dead`, gris para `unknown`.
- Paginación funcional con botones que se deshabilitan cuando no hay más páginas.
- Búsqueda de personajes por nombre.
- Filtros por estado, género y especie que se combinan entre sí.
- Mensajes de error claros cuando no se encuentran resultados o falla la API.

## API utilizada

- Rick and Morty API: https://rickandmortyapi.com/

## Creditos y notas

- El proyecto fue desarrollado como una entrega de curso con uso de Git y GitHub.
- El archivo `integrantes.txt` contiene los nombres de los participantes.
- El archivo `ia-copilot-preguntas-respuestas.txt` documenta la interacción con la IA utilizada.
