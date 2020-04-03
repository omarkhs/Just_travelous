import React, { Component } from 'react';
import CityHttpService from '../api/city.http.service';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { PagingState, IntegratedPaging } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
});
class CitiesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'city_name', title: 'City Name' },
        { name: 'post_code', title: 'Postal Code' },
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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Grid rows={this.state.rows} columns={this.state.columns}>
          <PagingState defaultCurrentPage={0} pageSize={5} />
          <IntegratedPaging />
          <Table />
          <TableHeaderRow />
          <PagingPanel />
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(CitiesTable);
