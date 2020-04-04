import http from './http.config';

class CountryHasCityHttpService {
  getAll() {
    return http.get('/countryhascity');
  }
  
}

export default new CountryHasCityHttpService();