import http from './http.config';

class CountryHttpService {
  getAll() {
    return http.get('/countries');
  }

  getCountryByName(countryName) {
    return http.get(`/countries/${countryName}`);
  }

  filterColumn(columnName){
    return http.get(`/countries/column/${columnName}`)  
  }

  create(newCountry) {
    return http.post('/countries', newCountry);
  }

  delete(countryName) {
    return http.delete(`/countries/delete/${countryName}`, countryName);
  }

}

export default new CountryHttpService();