// The controller job is to get the data from the model
import { Experience } from '../models/experience.model.js';

// Create and Save a new Experience
export function create(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  console.log("in create exp,", req.body);
  // Create new Experience with provided data
  const experience = new Experience({
    ExperienceName: req.body.ExperienceName,
    ExperienceRating: req.body.ExperienceName,
    ExperienceAccessibility: req.body.ExperienceAccessibility,
    ExperienceCost: req.body.ExperienceCost,
  });

  // Save Experience in the database
  Experience.create(experience, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the experience.',
      });
    else res.send(data);
  });
}

// Retrieve all Experience from the database.
export function findAllExperience(req, res) {
  Experience.getAllExperience((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving experiences.',
      });
    else res.send(data);
  });
}

// Retrieve all Restaurant from the database.
export function findAllRestaurant(req, res) {
  Experience.getAllRestaurant((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving restaurants.',
      });
    else res.send(data);
  });
}

// Retrieve all Entertainment from the database.
export function findAllEntertainment(req, res) {
  Experience.getAllEntertainment((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving entertainments.',
      });
    else res.send(data);
  });
}

// Retrieve all Sightseeing from the database.
export function findAllSightseeing(req, res) {
  Experience.getAllSightseeing((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving sightseeing.',
      });
    else res.send(data);
  });
}

// update
export function update(req, res) {
  // TODO req body check
  Experience.update(
    req.body.expId,
    req.body.expName,
    req.body.expRate,
    req.body.expAccess,
    req.body.expCost,
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found experience with id ${req.params.expId}.`,
          });
        } else {
          res.status(500).send({
            message: 'Error updating experience with id ' + req.params.expId,
          });
        }
      } else res.send(data);
    }
  );
}

// join
export function join(req, res) {
  Experience.join(req.params.expCost, req.params.restrType, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving join result.',
      });
    else res.send(data);
  });
}

// count
export function count(req, res) {
  Experience.count((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving count.',
      });
    else res.send(data);
  });
}

// groupBy
export function groupBy(req, res) {
  Experience.groupBy((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving group by result.',
      });
    else res.send(data);
  });
}

// division
export function division(req, res) {
  Experience.division((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving group by result.',
      });
    else res.send(data);
  });
}

