import React, { useState } from 'react';
import { Avatar, Button, Container, Grid, TextField, Typography } from '@mui/material';




const ProfilePage = ({ user }) => {
  
  const [password, setPassword] = useState('');

  const handleChangePassword = () => {
    // Implement password change logic here
    console.log('Changing password...');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container maxWidth="sm" className='mt-20'>
      <Grid container spacing={2} justifyContent="center" alignItems="center" textAlign="center">
      <div className=' grid grid-cols-2'>
        <Grid  className='place-items-center'>
          <Avatar alt={user?.name} src={user?.img} className='min-h-20 min-w-20'/>
        </Grid>
        
        <Grid item xs={12}  className='place-items-center'>
          <Typography variant="h5" gutterBottom className='grid place-items-center'>
            <span className=' text-2xl grid place-items-center'>
            Abdul Hannan
            </span>
          </Typography>
        </Grid>
        </div>
        <Grid item xs={12}>
          <TextField
            label="Change Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            
          />
        </Grid>
        
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleChangePassword}
            
          >
            Change Password
          </Button>
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default ProfilePage;
