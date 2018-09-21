import { API_URL, HEADERS } from './config';
import toJSON from './utils';

const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON);

const getAlbums = id =>
  fetch(`${API_URL}/albums/?ids=${id}`, HEADERS).then(toJSON);

const getAlbumTraks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON);

export {
  getAlbum,
  getAlbums,
  getAlbumTraks,
};
