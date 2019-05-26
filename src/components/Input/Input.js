import React, { Component, Fragment } from 'react';
import { Input, InputLabel, Paper, withStyles, MenuItem, Select } from '@material-ui/core';
import { inputStyles as styles } from './InputStyles';

class GenericInput extends Component {
  render() {
    const { classes, label, placeholder, options, button } = this.props;
    return (
      <Fragment>
        <InputLabel className={classes.label}>{label}</InputLabel>
        <Paper className={classes.container}>
          {!options && <div className={classes.divider}/>}
          {options ?
            <Fragment>
              <Select value={'found.ee'} className={classes.input}>
                {
                  options.map((option) => (
                    <MenuItem button={true} component={'div'} key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))
                }
              </Select>
              <img src={button} alt={''}/>
            </Fragment> :
            <Input
              className={classes.input}
              fullWidth
              placeholder={placeholder}
            >
            </Input>}
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(GenericInput);
