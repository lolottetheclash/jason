import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Grid
      container
      style={{
        height: 60,
        marginTop: 60,
      }}
    >
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <Paper
          square={true}
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f66c6c',
            color: 'white',
          }}
        >
          <Typography>
            Réalisé par Jason en Anthestérion de l'an 515 avant JC
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Footer;
