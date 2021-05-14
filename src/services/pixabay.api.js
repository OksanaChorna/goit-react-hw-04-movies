import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
// movie/550?api_key=17f34524669c2658ba6f6a8fb0e96e0c
// 'https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key';
const API_KEY = '17f34524669c2658ba6f6a8fb0e96e0c';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
};

const fetchPixabayImgs = async ({ q, page }) => {
  return await axios.get('', { params: { q, page } });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchPixabayImgs };
