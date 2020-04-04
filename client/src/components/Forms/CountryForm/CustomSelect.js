import React from 'react';
import { CustomInput } from './CustomInput';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  select: {
    marginBottom: theme.spacing(2),
  },
}));
export const CustomSelect = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
    <InputLabel>Continent</InputLabel>
      <Select
        defaultValue='North America'
        className={classes.select}
        autoWidth={true}
        variant='outlined'
        input={<CustomInput />}>
        <MenuItem value='Africa'>Africa</MenuItem>
        <MenuItem value='Antarctica'>Antarctica</MenuItem>
        <MenuItem value='Asia'>Asia</MenuItem>
        <MenuItem value='Australia'>Australia</MenuItem>
        <MenuItem value='Europe'>Europe</MenuItem>
        <MenuItem value='North America'>North America</MenuItem>
        <MenuItem value='South America'>South America</MenuItem>
      </Select>
      <br />
    </React.Fragment>
  );
};
