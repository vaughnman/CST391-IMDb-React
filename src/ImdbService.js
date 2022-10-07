import axios from 'axios';

/** Service for interacting with the IMDb Rest API */
export class ImdbService {
  url = "https://express-internetmusicdatabase.azurewebsites.net";
  
  getAlbum(albumId) {
    return axios.get(this.url + '/album/get?albumId=' + albumId);
  }

  getAllAlbums() {
    return axios.get(this.url + '/album/getAll');
  }

  saveAlbum(album) {
    return axios.post(this.url + '/album/save', album);
  }

  deleteAlbum(albumId) {
    return axios.delete(this.url + '/album/delete?albumId=' + albumId);
  }

  getReviews(albumId)
  {
    return axios.get(this.url + '/review/get?albumId=' + albumId);
  }
  
  addReview(review)
  {
    return axios.post(this.url + '/review/add', review);
  }

  deleteReview(reviewId)
  {
    return axios.delete(this.url + '/review/delete?reviewId=' + reviewId);
  }

  getRating(albumId)
  {
    return axios.get(this.url + '/rating/get?albumId=' + albumId);
  }
}
