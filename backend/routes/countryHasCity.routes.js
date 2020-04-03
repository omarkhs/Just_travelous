// "Routes" to forward the supported requests
// (and any information encoded in request URLs) to the appropriate controller functions.
// Routes define the server response to REST endpoints
import { findSpecific, findAll } from '../controllers/countryHasCity.controller';
export default (server) => {

// TODO 
// get only the cities column from the division

  // Retrieve all cities in a specific country (Division)
  server.get('/countryhascity/:CountryNameCHC', findSpecific);

  // Retrieve all countries_has_city in response to get request
  server.get('/countryhascity', findAll);
};
