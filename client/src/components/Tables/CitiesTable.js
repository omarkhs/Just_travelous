import React, { Component } from 'react';
import CityHttpService from '../../api/city.http.service';
import {
  PagingState,
  IntegratedPaging,
  EditingState,
} from '@devexpress/dx-react-grid';
import Paper from '@material-ui/core/Paper';

import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';

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

  commitChanges = ({ deleted }) => {
    let changedRows, deletedCityName;
    const { rows } = this.state;
    if (deleted) {
      deletedCityName = rows[deleted].CityName;
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row, index) => {
        return !deletedSet.has(index);
      });
      console.log(typeof deletedCityName);
      CityHttpService.delete(deletedCityName);
      this.setState({ rows: changedRows });
    }
  };

  render() {
    const { rows, columns } = this.state;
    return (
      <Paper>
        <Grid rows={rows} columns={columns}>
          <PagingState defaultCurrentPage={0} pageSize={5} />
          <IntegratedPaging />
          <EditingState onCommitChanges={this.commitChanges} />

          <Table />
          <TableHeaderRow />
          <TableEditColumn showDeleteCommand />
          <PagingPanel />
        </Grid>
      </Paper>
    );
  }
}
