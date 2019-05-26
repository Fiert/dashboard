import React, { Component, Fragment } from 'react';
import { Grid, withStyles, Chip } from '@material-ui/core';
import { AreaChart, Area, ResponsiveContainer, } from 'recharts';

import { dashboardStyles as styles } from './DashboardStyles';
import Input from '../../components/Input/Input';
import button from '../../images/icons/button_shorten.svg';
import launchArrow from '../../images/icons/launch_arrow.svg';
import purplePlus from '../../images/icons/purple-plus.svg';
import cyanPlus from '../../images/icons/cyan-plus.svg';
import bluePlus from '../../images/icons/blue-plus.svg';
import StatInfo from '../../components/StatInfo/StatInfo';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth - 400
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }


  render() {
    const data = [
      {
        name: 'Page A', uv: 0, pv: 0, amt: 0,
      },
      {
        name: 'Page B', uv: 200, pv: 1398, amt: 2210,
      },
      {
        name: 'Page C', uv: 2000, pv: 3059, amt: 2290,
      },
      {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
      },
      {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
      },
      {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
      },
      {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
      },
    ];
    const { classes } = this.props;
    const title = 'DASHBOARD';
    const options = [
      { value: 'found.ee', label: 'found.ee' },
      { value: 'found.ee2', label: 'found.ee2' },
      { value: 'found.ee3', label: 'found.ee3' }
    ];

    const statInfo = [
      {
        text: 'Spotify Listeners',
        icon: cyanPlus,
        color: 'cyan',
        stats: '357'
      },
      {
        text: 'Ticket Buyers',
        icon: bluePlus,
        color: 'blue',
        stats: '315'
      },
      {
        text: 'Music Purchases',
        icon: purplePlus,
        color: 'purple',
        stats: '432'
      },
    ];

    return (
      <Fragment>
        <div className={classes.container}>
          <div className={classes.title}>{title}</div>
          <div className={classes.contentContainer}>
            <Grid container spacing={8} style={{ paddingRight: 100 }}>
              <Grid item xs={12} md={12} lg={8}>
                <Input label={'DESTINATION URL'} placeholder={'ENTER YOUR LONG URL HERE'}/>
                <Chip
                  component={'div'}
                  key={'id'}
                  label={'SHORT LINKS'}
                  onDelete={() => {
                  }}
                  className={classes.chip}
                />
                <Chip
                  component={'div'}
                  key={''}
                  label={'GEO LINKS'}
                  onDelete={() => {
                  }}
                  className={classes.chip}
                />
              </Grid>
              <Grid item>
                <Input label={'DOMAINS'} placeholder={''} options={options} button={button}/>
              </Grid>
            </Grid>
            <div className={classes.content}>
              <Grid container spacing={10}>
                <Grid item lg={3}>
                  <div className={classes.title} style={{ paddingBottom: 24 }}>AUDIENCE GROWTH</div>
                  <div style={{ fontSize: 18, fontWeight: 'bold', lineHeight: 2, wordSpacing: 3 }}> Double your
                    audience
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 200, lineHeight: 2, wordSpacing: 3, color: '#b0acac' }}>
                    for as little as $25.
                    Launch ads now. <img src={launchArrow} alt={''}/>
                  </div>
                </Grid>
                <Grid item>
                  <div style={{ display: 'flex', paddingTop: 25 }}>
                    {statInfo.map((stat, k) => (
                      <StatInfo
                        key={k}
                        {...stat}
                      />
                    ))}
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <ResponsiveContainer width={this.state.width} height="30%" className={classes.chart}>
          <AreaChart
            data={data}
            margin={{
              top: 10, left: -60, bottom: 0,
            }}
          >
            <Area type="monotone" dataKey="uv" stackId="1" stroke="blue" fill="blue"/>
            <Area type="monotone" dataKey="pv" stackId="1" stroke="cyan" fill="cyan"/>
            <Area type="monotone" dataKey="amt" stackId="1" stroke="purple" fill="purple"/>
          </AreaChart>
        </ResponsiveContainer>
      </Fragment>
    );
  }

  handleResize = e => {
    const width = window.innerWidth;
    this.setState({
      width: width - 400
    });
  };
}

export default withStyles(styles)(Dashboard);
