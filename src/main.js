import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api';
import { showLoader, createGallery, hideLoader } from './js/render-function';

// <span class="loader"></span>
export const form = document.querySelector('.form');
// export const gallery = document.querySelector('.gallery');

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

  getImagesByQuery(query)
    .then(data => {
      console.log(data);

      if (data.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
          timeout: 5000,
          progressBar: false,
          close: false,
          icon: '',
          messageColor: 'white',
        });
        return;
      }
      showLoader();
      createGallery(data);
      hideLoader();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => form.reset());
}
