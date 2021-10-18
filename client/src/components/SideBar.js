import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import PersonIcon from '@mui/icons-material/Person'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import HomeIcon from '@mui/icons-material/Home'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import MyListItem from './MyListItem'
import { alpha } from '@mui/system'

export default function SideBar(props) {
  const { isOpen, toggleDrawer } = props
  const list = () => (
    <List>
      <MyListItem link={'/'} label={'Home'}>
        <HomeIcon />
      </MyListItem>
      <MyListItem link={'/clients'} label={'Patients'}>
        <PersonIcon />
      </MyListItem>
      <MyListItem link={'/Rendez-vous'} label={'Rendez-vous'}>
        <PermContactCalendarIcon />
      </MyListItem>
      <MyListItem link={'/paiments'} label={'paiments'}>
        <AttachMoneyIcon />
      </MyListItem>
    </List>
  )

  return (
    <Drawer
      anchor={'left'}
      open={isOpen}
      onClose={toggleDrawer}
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: {
          color: 'white',
          marginTop: 7,
          boxSizing: 'border-box',
          backgroundColor: (theme) => theme.palette.secondary.main,
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.5),
        },
      }}
    >
      {list()}
    </Drawer>
  )
}
