import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function SideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, left: open });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
          <List>
              <ListItem button component="a" href="/">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Home'}>
                  </ListItemText>
                </ListItem>

                <ListItem button component="a" href="/clients">
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Patients'}>
                  </ListItemText>
                </ListItem>

                <ListItem button component="a" href="/Rendez-vous">
                  <ListItemIcon>
                    <PermContactCalendarIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Rendez-vous'}>
                  </ListItemText>
                </ListItem>

                <ListItem button component="a" href="/paiments">
                  <ListItemIcon>
                    <AttachMoneyIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Paiments'}>
                  </ListItemText>
                </ListItem>

      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <MenuIcon onClick={toggleDrawer(true)} />
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}