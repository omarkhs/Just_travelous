import React, { Component } from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import {
  AddCityForm,
  AddCountryForm,
  CitiesTable,
  CountryTable,
  CountryCityTable,
  ProjectionQueryForm,
  SelectionQueryForm,
} from '../components';

class Countries extends Component {
  render() {
    return (
      <Container maxWidth='md'>
        <Typography variant='h1'>Just travelous</Typography>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='flex-start'>
          <Grid item xs={6}>
            <AddCityForm />
          </Grid>
          <Grid item xs={6}>
            <AddCountryForm />
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justify='space-evenly'
          alignItems='flex-start'>
          <Grid item xs={6}>
            <ProjectionQueryForm />
          </Grid>
          <Grid item xs={6}>
            <CountryTable />
          </Grid>
        </Grid>
        <CitiesTable />
        <Grid
          container
          direction='row'
          justify='space-evenly'
          alignItems='flex-start'>
          <Grid item xs={6}>
            <SelectionQueryForm />
          </Grid>
          <Grid item xs={6}>
            <CountryCityTable />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Countries;
