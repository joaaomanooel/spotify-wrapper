export default function album() {
  return {
    getAlbum: id => this.request(`${this.apiURL}/albums/${id}`),
    getAlbums: id => this.request(`${this.apiURL}/albums/?ids=${id}`),
    getAlbumTraks: id => this.request(`${this.apiURL}/albums/${id}/tracks`),
  };
}
