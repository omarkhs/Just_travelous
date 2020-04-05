import React, { Component } from 'react';
import CountryHttpService from '../../api/country.http.service';
import Paper from '@material-ui/core/Paper';
import {
  PagingState,
  IntegratedPaging,
  EditingState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
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

  commitChanges = ({ deleted }) => {
    let changedRows, deletedCoName;
    const { rows } = this.state;
    if (deleted) {
      deletedCoName = rows[deleted].CountryName;
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row, index) => {
        return !deletedSet.has(index);
      });
      CountryHttpService.delete(deletedCoName);
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
