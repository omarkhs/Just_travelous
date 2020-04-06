import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExperienceHttpService from '../api/experience.http.service';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
}));

export default function CountCard() {
  const [count, setCount] = useState(0);
  const [cities, setCities] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const classes = useStyles();

  const getCount = () => {
    ExperienceHttpService.getCount()
      .then((response) => {
        let result = Object.values(response.data[0]);
        setCount(result);
        console.log('response of post request adding new city', result);
      })
      .catch((e) => {
        console.log('error in post request adding new city', e);
      });
  };

  const getFunCities = () => {
    ExperienceHttpService.getFunCities()
      .then((response) => {
        setCities(response.data);
        console.log('response of post request adding new city', response);
      })
      .catch((e) => {
        console.log('error in post request adding new city', e);
      });
  };

  const getAvgCostPerRating = () => {
    ExperienceHttpService.getGroup()
      .then((response) => {
        setExperiences(response.data);
        console.log('response of post request adding new city', response);
      })
      .catch((e) => {
        console.log('error in post request adding new city', e);
      });
  };

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <Typography variant='subtitle1' color='textPrimary'>
          The total number of experiences is: {count ? count : ''}
        </Typography>
        <Typography variant='subtitle1' color='textPrimary'>
          All Cities with all the entertainment experiences:{' '}
          {cities
            ? cities.map((city, idx) => <p key={idx}>{city.CityName}</p>)
            : ''}
        </Typography>
        <Typography variant='subtitle1' color='textPrimary'>
          Average cost of experiences per rating:{' '}
          {cities
            ? experiences.map((exp, idx) => (
                <p key={idx}>
                  Average cost of experiences with rating {exp.ExperienceRating}{' '}
                  is {exp['AVG(ExperienceCost)'].toFixed(2)}
                </p>
              ))
            : ''}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          variant='contained'
          color='primary'
          onClick={getCount}>
          how much fun out there?
        </Button>
        <Button
          size='small'
          variant='contained'
          color='primary'
          onClick={getFunCities}>
          Where is all the fun at?
        </Button>
        <Button
          size='small'
          variant='contained'
          color='primary'
          onClick={getAvgCostPerRating}>
          Do you get what you pay for?
        </Button>
      </CardActions>
    </Card>
  );
}
