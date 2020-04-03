// this file defines a Country object which is mapped to a row in database
// it uses the database connection in Create/Read/Update/Delete operations
import sql from './db.js';

export class Country {
  // Constructor for the country object
  constructor(country) {
    this.CountryName = country.CountryName;
    this.Continent = country.Continent;
  }

  static create(newCountry, result) {
    sql.query(`INSERT INTO country SET ?`, newCountry, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('created country: ', { newCountry });
      result(null, { newCountry });
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
    sql.query(
      `SELECT * FROM country WHERE CountryName = ${countryName}`,
      (err, res) => {
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
      }
    );
  }

  static deleteByName(countryName, result) {
    sql.query(
      `DELETE FROM  just_travelous.country WHERE CountryName = ${countryName}`,
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
          return;
        }

        // SQL doesn't give an error if you are trying to delete something that is not there

        // if (!res) {
        //   console.log('response due to not found');
        //   result(null, res[0]);
        //   return;
        // }

        result(null, countryName + ' has been deleted');
      }
    );
  }

  static findByColumn(columnName, result) {
    sql.query(`SELECT ${columnName} FROM country `, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log('found column: ', res);
        result(null, res);
        return;
      }

      // country with the id not found
      result({ kind: 'not_found' }, null);
    });
  }
}
