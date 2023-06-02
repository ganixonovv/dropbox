import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { logo } from '../../constant/icons';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <img width="48" height="48" src={logo} alt="logo"/>
          </Typography>
          <Button color="inherit" ><Link to="/login">Log Out</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}