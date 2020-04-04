import React, { Component } from 'react';
import CityHttpService from '../../api/city.http.service';
import GenericTable from './GenericTable';

export class CitiesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'CityName', title: 'City Name' },
        { name: 'PostalCode', title: 'Postal Code' },
      ],
      rows: [],
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.fetchData()
      .then((res) => {
        console.log('cdm res', res);
        this.setState({ rows: res });
      })
      .catch((err) => console.log(err));
  }

  fetchData = async () => {
    let result;
    await CityHttpService.getAll()
      .then((response) => {
        console.log('response of GET all cities request ', response);
        if (response.status !== 200) {
          throw Error('err');
        }
        result = response.data;
      })
      .catch((e) => {
        console.log('error in GET all cities request', e);
      });
    return result;
  };

  render() {
    return <GenericTable rows={this.state.rows} columns={this.state.columns} />;
  }
}
