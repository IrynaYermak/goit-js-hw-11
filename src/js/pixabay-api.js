import axios from 'axios';

import iziToast from 'izitoast';
import { form, gallery } from '../main';

const API_KEY = '52353296-7e1352dd89e2156c2e1f9fbb2';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    // fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo`)
    //   .then(res => {
    //     if (!res.ok) {
    //       throw new Error(res.status);
    //     }
    //     return res.json();
    //   })
    .then(data => {
      if (data.data.hits.length === 0) {
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

      //   console.log(data.data.hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => form.reset());
}
