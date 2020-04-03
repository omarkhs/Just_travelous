// The controller job is to get the data from the model
import { Country } from '../models/country.model.js';

// Create and Save a new Country
export function create(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  // Create new Country with provided data
  const country = new Country({
    CountryName: req.body.CountryName,
    Continent: req.body.Continent,
  });

  // Save Country in the database
  Country.create(country, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the country.',
      });
    else res.send(data);
  });
}

// Retrieve all Cities from the database.
export function findAll(req, res) {
  Country.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving countries.',
      });
    else res.send(data);
  });
}

// Find a single Country with a countryName
export function findOne(req, res) {
  Country.findByName(req.params.countryName, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found country with name ${req.params.countryName}.`,
        });
      } else {
        res.status(500).send({
          message:
            'Error retrieving country with name ' + req.params.countryName,
        });
      }
    } else res.send(data);
  });
}

// Delete a single Country with a countryName
export function deleteOne(req, res) {
  Country.deleteByName(req.params.countryName, (err, data) => {
    if (err) {
      if (err.kind === 'response due to not found') {
        res.status(404).send({
          message: `Not found country with name ${req.params.countryName}.`,
        });
      } else {
        res.status(500).send({
          message:
            'Error retrieving country with name ' + req.params.countryName,
        });
      }
    } else res.send(data);
  });
}

// Get a single Column with a countryName
export function findColumn(req, res) {
  Country.findByColumn(req.params.columnName, (err, data) => {
    if (err) {
      if (err.kind === 'response due to not found') {
        res.status(404).send({
          message: `Not found column with name ${req.params.columnName}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving column with name ' + req.params.columnName,
        });
      }
    } else res.send(data);
  });
}
