// The controller job is to get the data from the model
import { CountryHasCity } from '../models/countryHasCity.model.js';

// Retrieve all Cities from the database.
export function findAll(req, res) {
  CountryHasCity.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving countries.',
      });
    else res.send(data);
  });
}

// Find a single Country with a countryName
export function findSpecific(req, res) {
  CountryHasCity.findByCountry(req.params.CountryNameCHC, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found country with name ${req.params.CountryNameCHC}.`,
        });
      } else {
        res.status(500).send({
          message:
            'Error retrieving country with name ' + req.params.CountryNameCHC,
        });
      }
    } else res.send(data);
  });
}
