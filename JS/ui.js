const statusClass = {
  Alive: 'status-alive',
  Dead: 'status-dead',
  unknown: 'status-unknown',
};

export function renderCharacters(results, container) {
  if (!Array.isArray(results) || results.length === 0) {
    container.innerHTML = '<p class="empty-message">No hay personajes que coincidan con la búsqueda.</p>';
    return;
  }

  container.innerHTML = results
    .map((character) => {
      const originName = character.origin?.name || 'Desconocido';
      const statusClassName = statusClass[character.status] || statusClass.unknown;

      return `
        <article class="card">
          <img src="${character.image}" alt="${character.name}" loading="lazy" />
          <div class="card-body">
            <div class="card-title">
              <h2>${character.name}</h2>
              <span class="status-pill ${statusClassName}">${character.status}</span>
            </div>
            <p><strong>Especie:</strong> ${character.species}</p>
            <p><strong>Género:</strong> ${character.gender}</p>
            <p><strong>Origen:</strong> ${originName}</p>
          </div>
        </article>
      `;
    })
    .join('');
}

export function renderPagination(info, currentPage, elements) {
  const { prev, next, pages } = info;
  const { prevButton, nextButton, pageText } = elements;

  prevButton.disabled = !prev;
  nextButton.disabled = !next;
  pageText.textContent = `Página ${currentPage} de ${pages}`;
}

export function renderError(message, container) {
  container.innerHTML = `<p class="error-message">${message}</p>`;
}

export function setLoading(isLoading, container) {
  container.innerHTML = isLoading
    ? '<div class="loading">Cargando personajes...</div>'
    : '';
}
