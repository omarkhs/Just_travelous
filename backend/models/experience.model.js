// this file defines a Experience object which is mapped to a row in database
// it uses the database connection in Create/Read/Update/Delete operations
import sql from './db.js';

export class Experience {
  // Constructor for the experience object
  constructor(experience) {
    this.ExperienceName = experience.ExperienceName;
    this.ExperienceRating = experience.ExperienceRating;
    this.ExperienceAccessibility = experience.ExperienceAccessibility;
    this.ExperienceCost = experience.ExperienceCost;
  }

  static create(newExperience, result) {
    sql.query(`INSERT INTO experience SET ?`, newExperience, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('created experience: ', {
        id: res.insertId,
        ...newExperience,
      });
      result(null, { id: res.insertId, ...newExperience });
    });
  }

  // get all for experience
  static getAllExperience(result) {
    sql.query(`SELECT * FROM experience`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('experience: ', res);
      result(null, res);
    });
  }

  // get all for restaurant
  static getAllRestaurant(result) {
    sql.query(`SELECT * FROM restaurant`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('restaurant: ', res);
      result(null, res);
    });
  }

  // get all for entertainment
  static getAllEntertainment(result) {
    sql.query(`SELECT * FROM entertainment`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('entertainment: ', res);
      result(null, res);
    });
  }

  // get all for sightseeing
  static getAllSightseeing(result) {
    sql.query(`SELECT * FROM sightseeing`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('sightseeing: ', res);
      result(null, res);
    });
  }

  static update(expId, expName, expRate, expAccess, expCost, result) {
    sql.query(
      `UPDATE experience SET 
      ExperienceName = ?,
      ExperienceRating = ?,
      ExperienceAccessibility = ?,
      ExperienceCost = ?
      WHERE ExperienceId = ?`,
      [expName, expRate, expAccess, expCost, expId],
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(null, err);
          return;
        }

        console.log('update: ', res);
        result(null, res);
      }
    );
  }

  static join(expCost, restrType, result) {
    sql.query(
      `SELECT 
        e.ExperienceId, 
        e.ExperienceCost, 
        r.RestaurantExperienceId, 
        r.Type 
      FROM experience e
      INNER JOIN restaurant r 
        ON e.ExperienceId = r.RestaurantExperienceId
      WHERE 
        e.ExperienceCost > ?
        AND r.Type = ?`,
      [expCost, restrType],
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(null, err);
          return;
        }

        console.log('join: ', res);
        result(null, res);
      }
    );
  }

  static count(result) {
    sql.query(`SELECT Count(*) FROM experience`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('count: ', res);
      result(null, res);
    });
  }

  static groupBy(result) {
    sql.query(
      `SELECT ExperienceRating, AVG(ExperienceCost) 
      FROM experience 
      GROUP BY ExperienceRating 
      ORDER BY ExperienceRating`,
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(null, err);
          return;
        }

        console.log('group: ', res);
        result(null, res);
      }
    );
  }
}
