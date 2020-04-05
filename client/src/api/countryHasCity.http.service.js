import http from './http.config';

class CountryHasCityHttpService {
  getAll() {
    return http.get('/countryhascity');
  }

  getAllCountryCities(CountryNameCHC) {
    return http.get(`/countryhascity/${CountryNameCHC}`);
  }
}

export default new CountryHasCityHttpService();
