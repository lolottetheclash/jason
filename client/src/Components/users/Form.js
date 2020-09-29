import React, { useState } from 'react';
import { FormControl, Button, TextField } from '@material-ui/core';

const Form = props => {
  const { addUser } = props;
  const [user, setUser] = useState({
    name: '',
  });
  const [err, setErr] = useState({
    isError: false,
    text: '',
  });

  const handleChange = e => {
    if (!e.target.value.match('^[a-zA-Z]+$') && e.target.value !== '') {
      setErr({ text: 'Name must contain only letters', isError: true });
    } else {
      setErr({ text: '', isError: false });
    }
    setUser({
      name: e.target.value,
    });
  };

  const onSubmit = () => {
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
        setUser({
          name: '',
        });
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
      }}
    >
      <FormControl>
        <TextField
          id="userName"
          aria-describedby="User Name"
          value={user.name}
          onChange={handleChange}
          helperText={err.isError ? err.text : ''}
          error={err.isError ? true : false}
          label="Name"
        />
      </FormControl>
      <Button
        size="small"
        variant="contained"
        color="primary"
        style={{ marginLeft: 20 }}
        onClick={onSubmit}
        disabled={err.text === '' ? false : true}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
