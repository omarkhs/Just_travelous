import http from './http.config';
// This class sends REST http requests to our backend server
class CityHttpService {
  getAll() {
    return http.get('/cities');
  }

  get(id) {
    return http.get(`/cities/${id}`);
  }

  create(newCity) {
    return http.post('/cities', newCity);
  }
}

export default new CityHttpService();
