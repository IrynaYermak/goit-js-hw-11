import axios from 'axios';
import iziToast from 'izitoast';
import { form } from '../main';

const API_KEY = '52353296-7e1352dd89e2156c2e1f9fbb2';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(data => {
      if (data.data.hits.length === 0) {
        alert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      console.log(data.data.hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => form.reset());
}
