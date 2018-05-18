import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
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
sinonStubPromise(sinon);

describe('Spotify Wrapper', () => {
  describe('Smok test', () => {
    it('Sould exist the search method', () => expect(search).to.be.exist);

    it('Sould exist the searchAlbums method', () => expect(searchAlbums).to.exist);

    it('Sould exist the searchArtists method', () => expect(searchArtists).to.exist);

    it('Sould exist the searchTracks method', () => expect(searchTracks).to.exist);

    it('Sould exist the searchPlaylists method', () => expect(searchPlaylists).to.exist);
  });

  describe('Generic Search', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should call fetch function', () => {
      search();
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      context('passing one type', () => {
        search('Emicida', 'artist');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=artist');

        search('Emicida', 'album');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=album');
      });

      context('passing more than one type', () => {
        search('Emicida', ['artist', 'album']);
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=artist,album');
      });
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({ body: 'json' });
      const artists = search('Emicida', 'artist');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });
});
