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

import { getAlbum, getAlbums, getAlbumTraks } from '../src/album';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Album', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke test', () => {
    it('Should have getAlbum method', () => expect(getAlbum).to.exist);

    it('Should have getAlbums method', () => expect(getAlbums).to.exist);

    it('Should have getAlbumTracks method', () => expect(getAlbumTraks).to.exist);
  });

  describe('getAlbum', () => {
    it('Should call fetch method', () => {
      getAlbum();
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      getAlbum('4aawyAB9vmqN3uQ7FjRGTas');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTas');
    });

    it('Should return the JSON Data from the Promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbums', () => {
    it('Should call fetch method', () => {
      getAlbums();
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTas']);
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTas');
    });

    it('Should return the JSON Data from the Promise', () => {
      promise.resolves({ album: 'name' });
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTas']);
      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbumTraks', () => {
    it('Should call fetch method', () => {
      getAlbumTraks();
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      getAlbumTraks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('Should return the JSON Data from the Promise', () => {
      promise.resolves({ album: 'name' });
      const albums = getAlbumTraks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});
