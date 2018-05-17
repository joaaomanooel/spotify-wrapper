import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sininStubPromise from 'sinon-stub-promise';
import {
  it,
  describe,
  beforeEach,
  afterEach,
} from 'mocha';

import {
  search,
  searchAlbums,
  searchArtists,
  searchPlaylists,
  searchTracks,
} from '../src/main';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sininStubPromise(sinon);

describe('Spotify Wrapper', () => {
  describe('Smok test', () => {
    it('Sould exist the search method', () => expect(search).to.be.exist);

    it('Sould exist the searchAlbums method', () => expect(searchAlbums).to.exist);

    it('Sould exist the searchArtists method', () => expect(searchArtists).to.exist);

    it('Sould exist the searchTracks method', () => expect(searchTracks).to.exist);

    it('Sould exist the searchPlaylists method', () => expect(searchPlaylists).to.exist);
  });

  describe('Generic Search', () => {
    let fetchStub;

    beforeEach(() => {
      fetchStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
      fetchStub.restore();
    });

    it('Should call fetch function', () => {
      search();
      return expect(fetchStub).to.have.been.calledOnce;
    });

    it('Sould recive  the correct url to fetch', () => {
      context('Passing one type', () => {
        search('Emicida', 'artist');
        expect(fetchStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=artist');

        search('Emicida', 'album');
        expect(fetchStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=album');
      });

      context('Passingmore than one type', () => {
        search('Emicida', ['album', 'artist']);
        expect(fetchStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=album,artist');
      });
    });
  });
});
