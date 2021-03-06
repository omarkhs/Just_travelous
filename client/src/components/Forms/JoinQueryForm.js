import React from 'react';
import ExperienceHttpService from '../../api/experience.http.service';
import { useForm } from 'react-hook-form';
import {
  Button,
  TextField,
  Paper,
  Slider,
  Typography,
} from '@material-ui/core';
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
  form: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));

export default function JoinQueryForm() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [expCost, setCost] = useState(1);
  const { register, handleSubmit, errors, reset } = useForm();
  const columns = [
    { name: 'ExperienceId', title: 'ID' },
    { name: 'ExperienceName', title: 'Name' },
    { name: 'ExperienceCost', title: 'Price' },
    { name: 'ExperienceRating', title: 'Rating' },
    { name: 'Type', title: 'Cuisine' },
    { name: 'Capacity', title: 'Capacity' },
  ];

  const textFieldProps = {
    type: 'text',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    required: true,
    margin: 'normal',
  };

  const resturantTypeValidation = {
    required: {
      value: true,
      message: 'This field is required',
    },
  };

  const marks = [
    {
      value: 1,
      label: '$',
    },
    {
      value: 2,
      label: '$$',
    },
    {
      value: 3,
      label: '$$$',
    },
    {
      value: 4,
      label: '$$$$',
    },
    {
      value: 5,
      label: '$$$$$',
    },
  ];

  const updateCost = (value) => {
    setCost(value);
  };

  const onSubmit = (data) => {
    const { Type } = data;
    console.log(data);
    ExperienceHttpService.getJoined(expCost, Type)
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
    <Paper className={classes.root} elevation={3}>
      <form className={classes.form}>
        <TextField
          name='Type'
          label='Cuisine type'
          error={errors.Type ? true : false}
          helperText={errors.Type ? errors.Type.message : ''}
          {...textFieldProps}
          inputRef={register(resturantTypeValidation)}
        />
        <div className={classes.slider}>
          <Typography>Price Range</Typography>
          <Slider
            name='ExperienceCost'
            defaultValue={1}
            step={null}
            valueLabelDisplay='auto'
            min={1}
            max={5}
            marks={marks}
            inputRef={register()}
            onChangeCommitted={(event, value) => {
              updateCost(value);
            }}
          />
        </div>
        <Button
          variant='contained'
          color='primary'
          onClick={handleSubmit(onSubmit)}>
          Get resturants
        </Button>
      </form>
      <GenericTable columns={columns} rows={rows} />
    </Paper>
  );
}
