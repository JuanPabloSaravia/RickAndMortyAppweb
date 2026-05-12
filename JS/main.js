import { fetchCharacters } from './api.js';
import { renderCharacters, renderPagination, renderError, setLoading } from './ui.js';

const state = {
  page: 1,
  filters: {
    name: '',
    status: '',
    gender: '',
    species: '',
  },
};

const cardsContainer = document.getElementById('cards-container');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageText = document.getElementById('page-text');
const form = document.getElementById('search-form');
const nameField = document.getElementById('name');
const statusField = document.getElementById('status');
const speciesField = document.getElementById('species');
const genderField = document.getElementById('gender');

async function loadCharacters() {
  setLoading(true, cardsContainer);

  try {
    const data = await fetchCharacters({
      page: state.page,
      name: state.filters.name,
      status: state.filters.status,
      gender: state.filters.gender,
      species: state.filters.species,
    });

    renderCharacters(data.results, cardsContainer);
    renderPagination(data.info, state.page, {
      prevButton,
      nextButton,
      pageText,
    });
  } catch (error) {
    renderError(error.message, cardsContainer);
    pageText.textContent = 'Página 0 de 0';
    prevButton.disabled = true;
    nextButton.disabled = true;
  }
}

function updateFilters() {
  state.filters.name = nameField.value;
  state.filters.status = statusField.value;
  state.filters.gender = genderField.value;
  state.filters.species = speciesField.value;
  state.page = 1;
  loadCharacters();
}

function changePage(delta) {
  state.page += delta;
  loadCharacters();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  updateFilters();
});

prevButton.addEventListener('click', () => changePage(-1));
nextButton.addEventListener('click', () => changePage(1));

window.addEventListener('DOMContentLoaded', loadCharacters);
