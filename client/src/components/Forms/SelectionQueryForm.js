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
  },
}));

export default function AddCityForm() {
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
    <Container maxWidth='sm'>
      <Paper className={classes.root} elevation={3}>
        <GenericTable className={classes.table} columns={columns} rows={rows} />
        <form>
          <TextField
            className={classes.text}
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
            className={classes.text}
            variant='contained'
            color='primary'
            onClick={handleSubmit(onSubmit)}>
            Get all country's cities
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
