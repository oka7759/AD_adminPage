import axios from 'axios';

export async function getCarList() {
  return await axios.get('/data/ad-list-data-set.json');
}
