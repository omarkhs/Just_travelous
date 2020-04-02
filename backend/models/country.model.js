// this file defines a Country object which is mapped to a row in database
// it uses the database connection in Create/Read/Update/Delete operations
import sql from './db.js';

export class Country {
  // Constructor for the country object
  constructor(county) { 
    this.CountryName = county.CountryName;
    this.Continent = county.Continent;
  }

  static create(newCountry, result) {
    sql.query(`INSERT INTO country SET ?`, newCountry, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('created country: ', {newCountry });
      result(null, {newCountry });
    });
  }

  static getAll(result) {
    sql.query(`SELECT * FROM country`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('countries: ', res);
      result(null, res);
    });
  }

  static findByName(countryName, result) {
    sql.query(`SELECT * FROM country WHERE CountryName = ${countryName}`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log('found country: ', res[0]);
        result(null, res[0]);
        return;
      }

      // country with the id not found
      result({ kind: 'not_found' }, null);
    });
  }
}
