import React, { Component } from 'react';
import { withStyles, List } from '@material-ui/core';
import { sidebarStyles as styles } from './SidebarStyles';
import Item from './Item/Item';
import history from '../../utils/history';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
  }

  componentDidMount() {
    this.setState({ selected: history.location.pathname.replace('/', '') });
  }

  render() {
    const { selected } = this.state;
    const { classes, navigation } = this.props;
    return (
      <div className={classes.container}>
        <List component={'nav'}>
          {navigation.map((nav, key) => (
            <Item nav={nav} selected={selected} key={key} onClick={() => this.onItemClick(nav)}/>
          ))}
        </List>
      </div>
    );
  }

  onItemClick = (nav) => {
    history.push(`/${nav}`);
    this.setState({ selected: nav });
  };
}

export default withStyles(styles)(Sidebar);
