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

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    CityHttpService.create(data)
      .then((response) => {
        console.log('response of post request adding new city', response);
      })
      .catch((e) => {
        console.log('error in post request adding new city', e);
      });
  };

  console.log('error due to', errors);

  return (
    <Container maxWidth='xs'>
      <Paper className={classes.root} elevation={3}>
        <form>
          <TextField
            type='text'
            placeholder='City Name'
            name='city_name'
            variant='outlined'
            size='small'
            fullWidth={true}
            inputRef={register({
              required: true,
              maxLength: 100,
            })}
          />
          <br />
          <br />
          <TextField
            type='text'
            placeholder='Postal Code'
            name='post_code'
            variant='outlined'
            size='small'
            fullWidth={true}
            inputRef={register({
              required: true,
              maxLength: 7,
            })}
          />
          <br />
          <br />
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
