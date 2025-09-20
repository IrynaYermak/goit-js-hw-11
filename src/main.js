import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, hideLoader, clearGallery } from './js/render-functions';

export const form = document.querySelector('.form');

form.addEventListener('submit', handlerSubmit);
hideLoader();
function handlerSubmit(event) {
  event.preventDefault();
  clearGallery();
  const query = event.target.elements['search-text'].value.trim();
  if (query === '') {
    iziToast.error(fillText());
    return;
  }

  getImagesByQuery(query)
    .then(data => {
      if (data.length === 0) {
        iziToast.info(infoText());
        return;
      }

      createGallery(data);
    })

    .catch(error => {
      iziToast.error(errorText(error));
    })

    .finally(() => {
      hideLoader();
      form.reset();
    });
}

//-- text fo iziToast--

function errorText(error) {
  const errorText = {
    title: 'Error',
    message: `Oops.. something goes wrong, error : ${error.status} !`,
    position: 'center',
    timeout: 5000,
    progressBar: false,
    close: false,
    icon: '',
    messageColor: 'white',
    titleColor: 'white',
  };
  return errorText;
}

function infoText() {
  const infoText = {
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'center',
    timeout: 5000,
    progressBar: false,
    close: false,
    icon: '',
    messageColor: 'white',
  };
  return infoText;
}

function fillText() {
  const fillText = {
    message: 'Sorry, you need to fill searсh query',
    position: 'topRight',
    timeout: 5000,
    progressBar: false,
    close: false,
    icon: '',
    messageColor: 'white',
  };
  return fillText;
}
