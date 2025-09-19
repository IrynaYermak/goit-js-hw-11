import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api';

// <span class="loader"></span>
export const form = document.querySelector('.form');
export const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();
  if (query === '') {
    alert('Sorry, you need to fill searhh query');
    return;
  }
  getImagesByQuery(query);
}
