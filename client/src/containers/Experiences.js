import React, { Component } from 'react';
import { Typography, Container } from '@material-ui/core';
import {
  ExperienceTable,
  EntertainmentTable,
  ResturantTable,
  SightseeingTable,
  JoinQueryForm,
  CardWithQs,
} from '../components';
class Experiences extends Component {
  render() {
    return (
      <Container maxWidth='md'>
        <Typography variant='h1'>Experiences</Typography>
        <br />
        <CardWithQs />
        <ExperienceTable />
        <JoinQueryForm />
        <Typography variant='h5'>Dinning</Typography>
        <ResturantTable />
        <Typography variant='h5'>Entertainment</Typography>
        <EntertainmentTable />
        <Typography variant='h5'>Sightseeing</Typography>
        <SightseeingTable />
      </Container>
    );
  }
}

export default Experiences;
