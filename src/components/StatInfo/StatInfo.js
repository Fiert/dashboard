import React, { Component } from 'react';
import { withStyles, MenuItem, Menu, Fade } from '@material-ui/core';
import { statInfoStyles as styles } from './StatInfoStyles';
import greenArrow from '../../images/icons/green_arrow.svg';

class StatInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null
    };
  }

  render() {
    const { classes, icon, text, stats } = this.props;
    const { anchorEl } = this.state;
    const open = anchorEl !== null;
    return (
      <div className={classes.container}>
        <img aria-owns={open ? 'menu' : ''}
             aria-haspopup={true}
             src={icon}
             alt={''}
             style={{ width: 'fit-content' }}
             onClick={this.onMenuOpen}
        />
        <div className={classes.text}> {text}</div>
        <div className={classes.stat}>{stats}%<img src={greenArrow} alt={''}/></div>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
          className={classes.menu}
        >
          <MenuItem onClick={this.handleClose} button={true} component={'div'} className={classes.menuItem}>LAUNCH</MenuItem>
          <MenuItem onClick={this.handleClose} button={true} component={'div'} className={classes.menuItem}>EDIT</MenuItem>
          <MenuItem onClick={this.handleClose} button={true} component={'div'} className={classes.menuItem}>SHARE</MenuItem>
        </Menu>
      </div>
    );
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
}

export default withStyles(styles)(StatInfo);
