import React from 'react';
import CountryHttpSerive from '../../api/country.http.service';
import { useForm } from 'react-hook-form';
import { Button, TextField, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GenericTable from '../Tables/GenericTable';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary,
  },
  slider: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  table: {
    backgroundColor: theme.palette.background,
  },
}));

export default function AddCityForm() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const columns = [
    { name: 'CountryName', title: 'Country' },
    { name: 'Continent', title: 'Continent' },
  ];
  const { register, handleSubmit, errors, reset } = useForm();
  const textFieldProps = {
    type: 'text',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    required: true,
    margin: 'normal',
  };

  const columnValidation = {
    required: {
      value: true,
      message: 'This field is required',
    },
    pattern: {
      value: /Country/i | /Continent/i,
      message: 'should be either country or continent',
    },
  };

  const parseColName = (colName) => {
    console.log(colName);
    if (colName.toLowerCase() === 'country') {
      return 'CountryName';
    } else if (colName.toLowerCase() === 'continent') {
      return 'Continent';
    } else return '';
  };

  const onSubmit = (data) => {
    const { Column } = data;
    const colName = parseColName(Column);
    CountryHttpSerive.filterColumn(colName)
      .then((response) => {
        setRows(response.data);
        console.log('response of GET request Join ', response);
      })
      .catch((e) => {
        console.log('error in GET request Join', e);
      });
    reset({ Type: '' });
  };

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.root} elevation={3}>
        <form>
          <TextField
            name='Column'
            label='Table Column'
            error={errors.Column ? true : false}
            helperText={errors.Column ? errors.Column.message : ''}
            {...textFieldProps}
            inputRef={register(columnValidation)}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit(onSubmit)}>
            Perform projection
          </Button>
        </form>
        <GenericTable className={classes.table} columns={columns} rows={rows} />
      </Paper>
    </Container>
  );
}
