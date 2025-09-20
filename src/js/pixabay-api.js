import axios from 'axios';
import { showLoader } from './render-functions';

const API_KEY = '52353296-7e1352dd89e2156c2e1f9fbb2';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  showLoader();
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(data => data.data.hits);
}
