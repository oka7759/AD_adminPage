import axios from 'axios';

export async function getDataSet() {
  return await axios.get('/data/ad-list-data-set.json');
}

export async function getChannelSet() {
  return await axios.get('/data/media-channel-data-set.json');
}

export async function getTrendSet() {
  return await axios.get('/data/trend-data-set.json');
}
