import http from './http.config';
// This class sends REST http requests to our backend server
class CityHttpService {
  getAll() {
    return http.get('/cities');
  }

  get(cityPostalCode) {
    return http.get(`/cities/${cityPostalCode}`);
  }

  create(newCity) {
    return http.post('/cities', newCity);
  }
}

export default new CityHttpService();
