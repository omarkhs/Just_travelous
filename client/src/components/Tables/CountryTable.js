import React, { Component } from 'react';
import CountryHttpService from '../../api/country.http.service';
import GenericTable from './GenericTable';

export class CountryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'CountryName', title: 'Country Name' },
        { name: 'Continent', title: 'Continent' },
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
    await CountryHttpService.getAll()
      .then((response) => {
        console.log('response of GET all cities request ', response);
        if (response.status !== 200) {
          throw Error('err');
        }
        result = response.data;
      })
      .catch((e) => {
        console.log('error in GET all countries request', e);
      });
    return result;
  };

  render() {
    return <GenericTable rows={this.state.rows} columns={this.state.columns} />;
  }
}


