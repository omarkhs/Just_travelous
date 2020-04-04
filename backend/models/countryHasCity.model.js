// this file defines a Country object which is mapped to a row in database
// it uses the database connection in Create/Read/Update/Delete operations
import sql from './db.js';

export class CountryHasCity {
  // Constructor for the country object
  constructor(countyHasCity) {
    this.CountryNameCHC = countyHasCity.CountryNameCHC;
    this.CityNameCHC = countyHasCity.CityNameCHC;
    this.PostalCodeCHC = countyHasCity.PostalCodeCHC;
  }

  static getAll(result) {
    sql.query(`SELECT * FROM just_travelous.country_has_city `, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('country_has_city: ', res);
      result(null, res);
    });
  }

  static findByCountry(CountryNameCHC, result) {
    sql.query(
      `SELECT CityNameCHC FROM just_travelous.country_has_city WHERE CountryNameCHC = ${CountryNameCHC}`,
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
          return;
        }

        if (res.length) {
          console.log('found country: ', res);
          result(null, res);
          return;
        }

        // country with the id not found
        result({ kind: 'not_found' }, null);
      }
    );
  }
}
