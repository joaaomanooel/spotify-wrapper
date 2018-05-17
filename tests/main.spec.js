import chai, { expect } from 'chai';
import { it, describe } from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sininStubPromise from 'sinon-stub-promise';

import {
  search,
  searchAlbuns,
  searchArtists,
  searchPlaylists,
  searchTracks,
} from '../src/main';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sininStubPromise(sinon);

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

  describe('Generic Search', () => {
    it('Should call fetch function', () => {
      const fetchStub = sinon.stub(global, 'fetch');
      const artist = search();

      expect(fetchStub).to.have.been.calledOnce;
    });
  });
});
