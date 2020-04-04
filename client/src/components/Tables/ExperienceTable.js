import React, { Component } from 'react';
import ExperienceHttpService from '../../api/experience.http.service';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
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
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
});

export class ExperienceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'ExperienceId', title: 'ID' },
        { name: 'ExperienceName', title: 'Name' },
        { name: 'ExperienceRating', title: 'Rating' },
        { name: 'ExperienceAccessibility', title: 'Accessibility' },
        { name: 'ExperienceCost', title: 'Cost' },
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
    await ExperienceHttpService.getAllExp()
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

  commitChanges = ({ added, changed }) => {
    let changedRows;
    const { rows } = this.state;
    if (added) {
      const len = rows.length;
      const startingAddedId = len > 0 ? rows[len - 1].ExperienceId + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => {
          let newExp = {
            ExperienceId: startingAddedId + index,
            ...row,
          };
          console.log("new eexp", newExp)
          ExperienceHttpService.create(newExp);
          return newExp;
        }),
      ];
    }

    if (changed) {
      changedRows = rows.map((row, index) => {
        if (changed[index]) {
          let updatedRow = { ...row, ...changed[index] };
          ExperienceHttpService.updateExpById(
            updatedRow.ExperienceId,
            updatedRow.ExperienceName,
            updatedRow.ExperienceRating,
            updatedRow.ExperienceAccessibility,
            updatedRow.ExperienceCost
          );
          return updatedRow;
        } else return row;
      });
    }
    console.log('chamnge rows', changedRows);
    this.setState({ rows: changedRows });
  };

  render() {
    const { rows, columns } = this.state;
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Grid rows={rows} columns={columns}>
          <PagingState defaultCurrentPage={0} pageSize={5} />
          <IntegratedPaging />
          <EditingState
            onCommitChanges={this.commitChanges}
            columnExtensions={[
              { columnName: 'ExperienceId', editingEnabled: false },
            ]}
          />
          <Table />
          <TableHeaderRow />
          <TableEditRow />
          <TableEditColumn showAddCommand showEditCommand />
          <PagingPanel />
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(ExperienceTable);
