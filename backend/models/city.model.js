// this file defines a City object which is mapped to a row in database
// it uses the database connection in Create/Read/Update/Delete operations
import sql from './db.js';

export class City {
  // Constructor for the city object
  constructor(city) { 
    this.CityName = city.CityName;
    this.PostalCode = city.PostalCode;
  }

  static create(newCity, result) {
    sql.query(`INSERT INTO city SET ?`, newCity, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('created city: ', {newCity});
      result(null, {newCity});
    });
  }

  static getAll(result) {
    sql.query(`SELECT * FROM city`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('cities: ', res);
      result(null, res);
    });
  }

  static findByPostalCode(cityPostalCode, result) {
    sql.query(`SELECT * FROM city WHERE PostalCode = ${cityPostalCode}`, (err, res) => {
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


  static deleteByName(cityName, result) {
    sql.query(`DELETE FROM  just_travelous.city WHERE CityName = ${cityName}`, (err, res) => {
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

      result(null, cityName + " has been deleted");

    });
  }

}


