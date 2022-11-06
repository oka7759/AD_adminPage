import axios from 'axios';

export async function getDataSet() {
  return await axios.get(
    'https://medup-590f3-default-rtdb.firebaseio.com/ads.json'
  );
}

export async function getChannelSet() {
  return await axios.get('/data/media-channel-data-set.json');
}

export async function getTrendSet() {
  return await axios.get('/data/trend-data-set.json');
}

export async function putDataSet(id) {
  return await axios.put(
    `https://medup-590f3-default-rtdb.firebaseio.com/ads/${id}.json`
  );
}
