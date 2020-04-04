import http from './http.config';
// This class sends REST http requests to our backend server
class ExperienceHttpService {
  create(newExp) {
    return http.post('/experience', newExp);
  }

  getAllExp() {
    return http.get('/experience');
  }

  getAllResturants() {
    return http.get('/experience/restaurant');
  }

  getAllEntertainment() {
    return http.get('/experience/entertainment');
  }

  getAllSightseeing() {
    return http.get('/experience/sightseeing');
  }

  updateExpById() {
    return http.post('/experience/updateById');
  }

  getJoined(expCost, restrType) {
    return http.get(`/experience/join/${expCost}/${restrType}`);
  }

  getCount() {
    return http.get('/experience/count');
  }

  getGroup() {
    return http.get('/experience/groupBy');
  }
}

export default new ExperienceHttpService();
