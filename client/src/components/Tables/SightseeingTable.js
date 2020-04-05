import React, { Component } from 'react';
import ExperienceHttpService from '../../api/experience.http.service';
import GenericTable from './GenericTable';

export class SightseeingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'SightSeeExperienceId', title: 'ID' },
        { name: 'Heritage', title: 'Heritage' },
      ],
      rows: [],
    };
  }
  componentDidMount() {
    this.fetchData()
      .then((res) => {
        console.log('cdm res', res);
        this.setState({ rows: res });
      })
      .catch((err) => console.log(err));
  }

  fetchData = async () => {
    let result;
    await ExperienceHttpService.getAllSightseeing()
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
