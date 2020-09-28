import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import User from './User';

const Users = props => {
  const { users } = props;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
      <Grid container spacing={3} style={{ width: '30%' }}>
        {users.map(user => (
          <Grid item xs={12} sm={6} lg={4} xl={4} key={user._id}>
            <User user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Users;
