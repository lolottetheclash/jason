import React, { useEffect, useState } from 'react';
import Users from './Users';
import Form from './Form';
import { Typography } from '@material-ui/core';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  const addUser = user => {
    setUsers([...users, user]);
  };

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div>
      <Typography
        variant="h5"
        style={{ textAlign: 'center', marginTop: 40, fontWeight: 'bold' }}
      >
        Ajouter un(e) Argonaute
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ textAlign: 'center', marginTop: 40 }}
      >
        Nom de l'Argonaute
      </Typography>
      <Form addUser={addUser} />
      <Typography
        variant="h5"
        style={{ textAlign: 'center', marginTop: 40, fontWeight: 'bold' }}
      >
        Membres de l'équipage
      </Typography>
      <Users users={users} />
    </div>
  );
};

export default UserPage;
