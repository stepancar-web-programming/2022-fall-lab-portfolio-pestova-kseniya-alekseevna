import React from 'react'

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


export default function Header() {
  return (
    <AppBar position="static" style={{ background: '#AA1803' }}>
    <Toolbar>
      <Typography variant="h4" 
        component="div" sx={{ flexGrow: 1 }} 
        fontFamily = 'Lucida Sans Unicode'>
        Сайт-визитка
      </Typography>
    </Toolbar>
  </AppBar>
  )
}
