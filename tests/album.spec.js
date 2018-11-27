import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';


global.fetch = require('node-fetch');

chai.use(sinonChai);

describe('Album', () => {
  let fetchedStub;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });

    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke test', () => {
    it('Should have getAlbum method', () => expect(spotify.album.getAlbum).to.exist);

    it('Should have getAlbums method', () => expect(spotify.album.getAlbums).to.exist);

    it('Should have getAlbumTracks method', () => expect(spotify.album.getAlbumTraks).to.exist);
  });

  describe('getAlbum', () => {
    it('Should call fetch method', () => {
      spotify.album.getAlbum();
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTas');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTas');
    });

    it('Should return the JSON Data from the Promise', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      album
        .then(data => expect(data).to.be.eql({ album: 'name' }));
    });
  });

  describe('getAlbums', () => {
    it('Should call fetch method', () => {
      spotify.album.getAlbums();
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTas']);
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTas');
    });

    it('Should return the JSON Data from the Promise', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTas']);
      albums
        .then(data => expect(data).to.be.eql({ album: 'name' }));
    });
  });

  describe('getAlbumTraks', () => {
    it('Should call fetch method', () => {
      spotify.album.getAlbumTraks();
      return expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.album.getAlbumTraks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('Should return the JSON Data from the Promise', () => {
      const albums = spotify.album.getAlbumTraks('4aawyAB9vmqN3uQ7FjRGTy');
      albums
        .then(data => expect(data).to.be.eql({ album: 'name' }));
    });
  });
});
