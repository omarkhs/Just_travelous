import React from 'react';
import CityHttpService from '../api/city.http.service';
import { useForm } from 'react-hook-form';
import { Button, TextField, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AddCityForm() {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const textFieldProps = {
    type: 'text',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    required: true,
    margin: 'normal',
  };

  const cityNameValidation = {
    required: {
      value: true,
      message: 'This field is required',
    },
    maxLength: {
      value: 100,
      message: "City name can't be more than 100 characters long",
    },
  };

  const postalCodeValidation = {
    required: {
      value: true,
      message: 'This field is required',
    },
    maxLength: {
      value: 7,
      message: "Postal code can't be more than 7 characters",
    },
    pattern: {
      value: /[0-9][A-Z] ?[0-9][A-Z][0-9]/i,
      message: 'Postal code should match the following format A1A 1A1',
    },
  };

  const onSubmit = (data) => {
    console.log(data);
    CityHttpService.create(data)
      .then((response) => {
        // res data returns newly add city
        console.log('response of post request adding new city', response);
      })
      .catch((e) => {
        console.log('error in post request adding new city', e);
      });
    reset({ city_name: '', post_code: '' });
  };

  return (
    <Container maxWidth='xs'>
      <Paper className={classes.root} elevation={3}>
        <form>
          <TextField
            name='city_name'
            label='City Name'
            {...textFieldProps}
            error={errors.city_name ? true : false}
            helperText={errors.city_name ? errors.city_name.message : ''}
            inputRef={register(cityNameValidation)}
          />
          <TextField
            name='post_code'
            label='Postal Code'
            error={errors.post_code ? true : false}
            helperText={errors.post_code ? errors.post_code.message : ''}
            {...textFieldProps}
            inputRef={register(postalCodeValidation)}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit(onSubmit)}>
            add city
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
