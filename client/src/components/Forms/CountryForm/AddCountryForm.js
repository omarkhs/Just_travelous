import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountryHttpService from '../../../api/country.http.service';
import { useForm, Controller } from 'react-hook-form';
import { CustomSelect } from './CustomSelect';
import { Button, TextField, Paper, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
}));

export default function AddCountryForm() {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset, control } = useForm();
  const textFieldProps = {
    type: 'text',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    required: true,
    margin: 'normal',
  };

  const countryNameValidation = {
    required: {
      value: true,
      message: 'This field is required',
    },
    maxLength: {
      value: 100,
      message: "Country name can't be more than 100 characters long",
    },
  };

  const onSubmit = (data) => {
    console.log(data);
    CountryHttpService.create(data)
      .then((response) => {
        // res data returns newly add city
        console.log('response of post request adding new country', response);
      })
      .catch((e) => {
        console.log('error in post request adding new country', e);
      });
    reset({ CountryName: '', Continent: 'North America' });
  };

  return (
    <Container maxWidth='xs'>
      <Paper className={classes.root} elevation={3}>
        <form>
          <TextField
            name='CountryName'
            label='Country Name'
            {...textFieldProps}
            error={errors.CountryName ? true : false}
            helperText={errors.CountryName ? errors.CountryName.message : ''}
            inputRef={register(countryNameValidation)}
          />
          <Controller
            as={<CustomSelect />}
            control={control}
            rules={{ required: true }}
            name='Continent'
          />
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit(onSubmit)}>
            add country
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
