import React from 'react';
import CHCHttpSerive from '../../api/countryHasCity.http.service';
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
  text: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  table: {
    backgroundColor: theme.palette.background,
  },
}));

export default function SelectionQueryForm() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const columns = [{ name: 'CityNameCHC', title: 'City Name' }];
  const { register, handleSubmit, errors, reset } = useForm();
  const textFieldProps = {
    type: 'text',
    variant: 'outlined',
    size: 'small',
    required: true,
    margin: 'normal',
  };

  const countryNameValidation = {
    required: {
      value: true,
      message: 'This field is required',
    },
  };

  const onSubmit = (data) => {
    const { CountryNameCHC } = data;
    CHCHttpSerive.getAllCountryCities(CountryNameCHC)
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
    <Container maxWidth='xs'>
      <Paper className={classes.root} elevation={3}>
        <form className={classes.text}>
          <TextField
            fullWidth
            name='CountryNameCHC'
            label='Country name'
            error={errors.CountryNameCHC ? true : false}
            helperText={
              errors.CountryNameCHC ? errors.CountryNameCHC.message : ''
            }
            {...textFieldProps}
            inputRef={register(countryNameValidation)}
          />
          <br />
          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={handleSubmit(onSubmit)}>
            Get all country's cities
          </Button>
        </form>
        <GenericTable className={classes.table} columns={columns} rows={rows} />
      </Paper>
    </Container>
  );
}
