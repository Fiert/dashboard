import React from 'react';
import { withStyles } from '@material-ui/core';
import { headerStyles as styles } from './headerStyle';
import profileIcon from '../../images/ee_icon.png';

const Header = ({ classes, logo, profile }) => {
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img src={logo} alt={'logo'} className={classes.logo}/>
      </div>
      <div className={classes.profile}>
        <img src={profileIcon} alt={'icon'} className={classes.profileIcon}/>{profile}
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
