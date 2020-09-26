import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import User from './User';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
      <Grid container spacing={3} style={{ width: '30%' }}>
        {users.map(user => (
          <Grid item xs={12} sm={6} lg={4} xl={2}>
            <User key={user._id} user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Users;
