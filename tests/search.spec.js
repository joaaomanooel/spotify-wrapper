import chai, { expect } from 'chai';
import {
  afterEach, beforeEach, describe, it,
} from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Search', () => {
  let fetchedStub;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });

    fetchedStub = sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smok test', () => {
    it('Should exist the searchAlbums method', () => expect(spotify.search.albums).to.exist);

    it('Should exist the searchArtists method', () => expect(spotify.search.artists).to.exist);

    it('Should exist the searchTracks method', () => expect(spotify.search.tracks).to.exist);

    it('Should exist the searchPlaylists method', () => expect(spotify.search.playlists).to.exist);
  });

  describe('searchArtists', () => {
    it('Should call fetch function', () => {
      spotify.search.artists('Emicida');
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.artists('Emicida');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=artist');

      spotify.search.artists('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('searchAlbums', () => {
    it('Should call fetch function', () => {
      spotify.search.albums('Emicida');
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.albums('Emicida');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=album');

      spotify.search.albums('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('searchPlayLists', () => {
    it('Should call fetch function', () => {
      spotify.search.playlists('Emicida');
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.playlists('Emicida');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=playlist');

      spotify.search.playlists('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });

  describe('searchTraks', () => {
    it('Should call fetch function', () => {
      spotify.search.tracks('Emicida');
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.tracks('Emicida');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Emicida&type=track');

      spotify.search.tracks('Muse');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });
});
