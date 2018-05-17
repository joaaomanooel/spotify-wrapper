import { expect } from 'chai';
import { it, describe } from 'mocha';
import {
  search,
  searchAlbuns,
  searchArtists,
  searchPlaylists,
  searchTracks,
} from '../src/main';

describe('Spotify Wrapper', () => {
  describe('Smok test', () => {
    it('Sould exist the search method', () => {
      expect(search).to.be.exist;
    });

    it('Sould exist the searchAlbuns method', () => {
      expect(searchAlbuns).to.exist;
    });

    it('Sould exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('Sould exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('Sould exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });
});
