// The controller job is to get the data from the model
import { City } from '../models/city.model.js';

// Create and Save a new City
export function create(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  // Create new city with provided data
  const city = new City({
    CityName: req.body.CityName,
    PostalCode: req.body.PostalCode,
  });

  // Save City in the database
  City.create(city, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the city.',
      });
    else res.send(data);
  });
}

// Retrieve all Cities from the database.
export function findAll(req, res) {
  City.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving cities.',
      });
    else res.send(data);
  });
}

// Find a single City with a cityPostalCode
export function findOne(req, res) {
  City.findByPostalCode(req.params.cityPostalCode, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found city with id ${req.params.cityPostalCode}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving city with id ' + req.params.cityPostalCode,
        });
      }
    } else res.send(data);
  });
}
