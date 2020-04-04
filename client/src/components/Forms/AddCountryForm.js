import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CountryHttpService from '../../api/country.http.service';
import { useForm, Controller } from 'react-hook-form';
import InputBase from '@material-ui/core/InputBase';
import {
  Button,
  TextField,
  Paper,
  Container,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    name: 'Continent',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

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
  select: {
    marginBottom: theme.spacing(2),
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
          <InputLabel>Continent</InputLabel>
          <Controller
            as={
              <Select
                className={classes.select}
                autoWidth={true}
                variant='outlined'
                input={<BootstrapInput />}>
                <MenuItem value='Africa'>Africa</MenuItem>
                <MenuItem value='Antarctica'>Antarctica</MenuItem>
                <MenuItem value='Asia'>Asia</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Europe'>Europe</MenuItem>
                <MenuItem value='North America'>North America</MenuItem>
                <MenuItem value='South America'>South America</MenuItem>
              </Select>
            }
            control={control}
            rules={{ required: true }}
            name='Continent'
            defaultValue='North America'
          />

          <br />
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
