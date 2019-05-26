import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { layoutStyles as styles } from './LayoutStyles';
import { Route, Switch } from 'react-router-dom';

import logo from '../../images/logo.png';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';
import group562 from '../../images/icons/Group 562.svg';
import group563 from '../../images/icons/Group 563.svg';

class Layout extends Component {
  render() {
    const navigation = ['dashboard', 'links', 'pages', 'embeds', 'bulks', 'audience', 'advertising', 'reporting'];
    const { classes } = this.props;
    return (
      <div>
        <Header logo={logo} profile={'@jason@found.ee'}/>
        <div className={classes.container}>
          <Sidebar navigation={navigation}/>
          <div style={{ flex: 1 }}>
            <Switch>
              <Route path={'/dashboard'} component={Dashboard}/>
            </Switch>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 20 }}>
          <div style={{ fontSize: 14, color: '#b0acac' }}>CHANGE BACKGROUND</div>
          <img src={group562} alt={''} style={{ padding: 5 }}/>
          <img src={group563} alt={''} style={{ padding: 5 }}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
