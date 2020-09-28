import React from 'react';
import { Card, CardMedia, Typography } from '@material-ui/core';

const User = props => {
  return (
    <Card
      style={{
        height: 80,
        width: 100,
        marginTop: 20,
      }}
    >
      <CardMedia
        style={{
          height: 0,
          paddingTop: '56.25%',
        }}
        title={props.user.name}
        image="https://cdn-s-www.lalsace.fr/images/0CF481AA-CA06-46E5-93B3-990FE3B456BC/NW_raw/l-adolescent-est-mort-apres-avoir-chasse-et-mange-une-marmotte-photo-d-illustration-pixabay-1594757883.jpg"
      />
      <Typography variant="subtitle1" style={{ textAlign: 'center' }}>
        {props.user.name}
      </Typography>
    </Card>
  );
};

export default User;
