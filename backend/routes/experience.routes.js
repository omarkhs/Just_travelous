// "Routes" to forward the supported requests
// (and any information encoded in request URLs) to the appropriate controller functions.
// Routes define the server response to REST endpoints
import {
  create,
  findAllExperience,
  findAllRestaurant,
  findAllEntertainment,
  findAllSightseeing,
  update,
  join,
  count,
  groupBy,
} from '../controllers/experience.controller';
export default (server) => {
  // Create a new experience in response to post request
  server.post('/experience', create);

  // Retrieve all experiences in response to get request
  server.get('/experience', findAllExperience);

  // Retrieve all restaurants in response to get request
  server.get('/experience/restaurant', findAllRestaurant);

  // Retrieve all entertainment in response to get request
  server.get('/experience/entertainment', findAllEntertainment);

  // Retrieve all sightseeing in response to get request
  server.get('/experience/sightseeing', findAllSightseeing);

  // Update experience
  server.post('/experience/updateById', update);

  // Retrieve join
  server.get('/experience/join/:expCost/:restrType', join);

  // Retrieve count
  server.get('/experience/count', count);

  // Retrieve group by
  server.get('/experience/groupBy', groupBy);
};
