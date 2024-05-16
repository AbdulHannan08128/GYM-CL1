import React, { useState } from 'react';
import { Avatar, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
 
}));

const ProfilePage = ({ user }) => {
  const classes = useStyles();
  const [password, setPassword] = useState('');

  const handleChangePassword = () => {
    // Implement password change logic here
    console.log('Changing password...');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} justifyContent="center" alignItems="center" textAlign="center">
        profile
        <Grid item xs={12}>
          <Avatar alt={user?.name} src={user?.img} className={classes.avatar} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            {user?.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Change Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleChangePassword}
            className={classes.button}
          >
            Change Password
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
