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
} from '../src/search';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Search', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smok test', () => {
    it('Should exist the search method', () => expect(search).to.be.exist);

    it('Should exist the searchAlbums method', () => expect(searchAlbums).to.exist);

    it('Should exist the searchArtists method', () => expect(searchArtists).to.exist);

    it('Should exist the searchTracks method', () => expect(searchTracks).to.exist);

    it('Should exist the searchPlaylists method', () => expect(searchPlaylists).to.exist);
  });

  describe('Generic Search', () => {
    it('Should call fetch function', () => {
      search();
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
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

    it('Should return the JSON Data from the Promise', () => {
      promise.resolves({ body: 'json' });
      const artists = search('Emicida', 'artist');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('searchArtists', () => {
    it('Should call fetch function', () => {
      searchArtists('Emicida');
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      searchArtists('Emicida');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=artist');

      searchArtists('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('searchAlbums', () => {
    it('Should call fetch function', () => {
      searchAlbums('Emicida');
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      searchAlbums('Emicida');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=album');

      searchAlbums('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('searchPlayLists', () => {
    it('Should call fetch function', () => {
      searchPlaylists('Emicida');
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      searchPlaylists('Emicida');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=playlist');

      searchPlaylists('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });

  describe('searchTraks', () => {
    it('Should call fetch function', () => {
      searchTracks('Emicida');
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      searchTracks('Emicida');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=track');

      searchTracks('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });
});
