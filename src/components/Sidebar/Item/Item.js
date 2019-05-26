import React, { Component } from 'react';
import { ListItem, withStyles } from '@material-ui/core';
import { itemStyles as styles } from './ItemStyles';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  render() {
    const { classes, nav, selected, key, onClick } = this.props;
    const { hover } = this.state;
    return (
      <ListItem
        button
        component={'a'}
        key={key}
        className={classes.item}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={onClick}
      >
        <div className={classes.divider} style={{ backgroundColor: hover || nav === selected ? '#ec4d4d' : '#FFFFFF'}}/>
        <div className={classes.text}>{nav.toUpperCase()}</div>
      </ListItem>
    );
  }

  onMouseEnter = () => this.setState({ hover: true });
  onMouseLeave = () => this.setState({ hover: false });
}

export default withStyles(styles)(Item);
