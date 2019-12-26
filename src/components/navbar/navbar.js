import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core/';
import { Link } from 'react-router-dom';

const tab = [
  {
    name: 'Home',
    url: '/home'
  },
  {
    name: 'One Zero',
    url: '/onezero'
  },
  {
    name: 'Elemenal',
    url: '/elemenal'
  },
  {
    name: 'Gen',
    url: '/onezero'
  },
  {
    name: 'Zora',
    url: '/onezero'
  },
  {
    name: 'Forge',
    url: '/onezero'
  },
  {
    name: 'humman part',
    url: '/onezero'
  },
  {
    name: 'marker',
    url: '/onezero'
  },
  {
    name: 'level',
    url: '/onezero'
  },
  {
    name: 'heated',
    url: '/onezero'
  },
  {
    name: 'ZerrOne',
    url: '/onezero'
  },
  {
    name: 'ZerrOne',
    url: '/onezero'
  },

]


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ background: '#fff', boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tab.map(item =>
            <Link to='/'{item.url}>
              <Tab label={item.name} />
            </Link>
          )}
        </Tabs>
      </AppBar>


    </div>
  );
}