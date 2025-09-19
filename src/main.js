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
    iziToast.error({
      message: 'Sorry, you need to fill searсh query',
      position: 'topRight',
      timeout: 5000,
      progressBar: false,
      close: false,
      icon: '',
      messageColor: 'white',
    });
    return;
  }
  getImagesByQuery(query);
}
