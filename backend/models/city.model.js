// this file defines a City object which is mapped to a row in database
// it uses the database connection in Create/Read/Update/Delete operations
import sql from './db.js';

export class City {
  // Constructor for the city object
  constructor(city) { 
    this.city_name = city.city_name;
    this.post_code = city.post_code;
  }

  static create(newCity, result) {
    sql.query(`INSERT INTO cities SET ?`, newCity, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('created city: ', { id: res.insertId, ...newCity });
      result(null, { id: res.insertId, ...newCity });
    });
  }

  static getAll(result) {
    sql.query(`SELECT * FROM cities`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('cities: ', res);
      result(null, res);
    });
  }

  static findById(cityId, result) {
    sql.query(`SELECT * FROM cities WHERE id = ${cityId}`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log('found city: ', res[0]);
        result(null, res[0]);
        return;
      }

      // city with the id not found
      result({ kind: 'not_found' }, null);
    });
  }
}
