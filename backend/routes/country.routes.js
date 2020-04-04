// "Routes" to forward the supported requests
// (and any information encoded in request URLs) to the appropriate controller functions.
// Routes define the server response to REST endpoints
import {
  create,
  findOne,
  findAll,
  deleteOne,
  findColumn,
} from '../controllers/country.controller';
export default (server) => {
  // Create a new Country in response to post request
  server.post('/countries', create);

  // Retrieve a single Country by its ID in response to get request
  server.get('/countries/:countryName', findOne);

  // delete a single Country by its name in response to get request (Delete Operation)
  server.delete('/countries/delete/:countryName', deleteOne);

  // Retrieve all Countries in response to get request
  server.get('/countries', findAll);

  // Retrieve all Countries in response to get request (Projection)
  server.get('/countries/column/:columnName', findColumn);
};
