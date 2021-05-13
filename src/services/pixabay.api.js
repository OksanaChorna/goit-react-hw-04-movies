import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '20667195-d8cc0b45a3716479e33d72c4b';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchPixabayImgs = async ({ q, page }) => {
  return await axios.get('', { params: { q, page } });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchPixabayImgs };
