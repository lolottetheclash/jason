import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

const Form = props => {
  const { addUser } = props;
  const [user, setUser] = useState({
    name: '',
  });

  const handleChange = e => {
    setUser({
      name: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log('user', user);
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then(data => {
        addUser(data.user);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
      <FormControl>
        <InputLabel htmlFor="User Name">Name</InputLabel>
        <Input
          id="userName"
          aria-describedby="User Name"
          value={user.name}
          onChange={handleChange}
          // error={!user.name.match('^[a-zA-Z]+$')}
        />
      </FormControl>
      <Button
        size="small"
        variant="contained"
        color="primary"
        style={{ marginLeft: 20 }}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
