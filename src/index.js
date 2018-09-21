// import {
//   search,
//   searchAlbums,
//   searchArtists,
//   searchPlaylists,
//   searchTracks,
// } from './search';

// import {
//   getAlbum,
//   getAlbums,
//   getAlbumTraks,
// } from './album';

import { API_URL } from './config';

// module.exports = {
//   search,
//   searchAlbums,
//   searchArtists,
//   searchPlaylists,
//   searchTracks,
//   getAlbum,
//   getAlbums,
//   getAlbumTraks,
// };

export default class SpotfyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(url, headers);
  }
}
