// "Routes" to forward the supported requests
// (and any information encoded in request URLs) to the appropriate controller functions.
// Routes define the server response to REST endpoints
import { create, findOne, findAll } from '../controllers/city.controller';
export default (server) => {
  // Create a new city in response to post request
  server.post('/cities', create);

  // Retrieve a single City by its ID in response to get request
  server.get('/cities/:cityId', findOne);

  // Retrieve all cities in response to get request
  server.get('/cities', findAll);
};
