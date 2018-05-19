import API_URL from './config';
import toJSON from './utils';

const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`).then(toJSON);

const getAlbums = id =>
  fetch(`${API_URL}/albums/?ids=${id}`).then(toJSON);

const getAlbumTraks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`).then(toJSON);

export {
  getAlbum,
  getAlbums,
  getAlbumTraks,
};
