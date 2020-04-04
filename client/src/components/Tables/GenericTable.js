import React, { Component } from 'react';
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

class GenericTable extends Component {
  render() {
    const { classes, rows, columns } = this.props;
    return (
      <Paper className={classes.root}>
        <Grid rows={rows} columns={columns}>
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

export default withStyles(styles)(GenericTable);
