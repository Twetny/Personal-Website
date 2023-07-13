import React , {useState} from 'react'
import './NavBar.css';
import {AppBar, Toolbar, Typography, Stack} from '@mui/material';

function NavBar() {
  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 3}}>
        <Typography variant='h2'>
          Gavin Lim
        </Typography>
        <Stack direction='row' spacing={6}>
          <Typography sx={{ '&:hover': {textDecoration: 'underline', cursor:'pointer'}}} variant='h4' onClick={() => {}}>
            About
          </Typography>
          <Typography sx={{ '&:hover': {textDecoration: 'underline', cursor:'pointer'}}} variant='h4' onClick={() => {}}>
            Projects
          </Typography>
          <Typography sx={{ '&:hover': {textDecoration: 'underline', cursor:'pointer'}}} variant='h4' onClick={() => {}}>
            Contact
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar
