import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import SideBar from './SideBar'

export default function Navbar() {
  const [state, toggleState] = useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <MenuIcon onClick={() => toggleState(!state)} />
          {state && <SideBar isOpen={state} toggleDrawer={toggleState} />}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
