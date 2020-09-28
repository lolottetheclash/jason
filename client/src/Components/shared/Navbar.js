import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import Logo from '../../assets/img/logo.png';
const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      style={{
        backgroundColor: '#f4f4f4',
        color: 'black',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex' }}>
        <img src={Logo} style={{ width: 100, marginRight: 15 }} />
        <Typography variant="h4">Les Argonautes</Typography>
      </div>
    </AppBar>
  );
};

export default Navbar;
