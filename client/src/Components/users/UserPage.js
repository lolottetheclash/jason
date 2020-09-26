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
      <Form addUser={addUser} />
      <Users users={users} />
    </div>
  );
};

export default UserPage;
