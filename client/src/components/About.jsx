import React from 'react';
import { Container, Grid, Typography } from '@mui/material';


function About() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <div className='w-80 h-80 rounded-lg bg-slate-400'>

          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            About Our Gym
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum leo id magna
            finibus, ac scelerisque purus volutpat. Integer nec tortor id metus eleifend
            vulputate. Ut non dolor eget velit eleifend vulputate quis nec nisi.
          </Typography>
          <Typography variant="body1" paragraph>
            Fusce ullamcorper interdum eros, eget feugiat ipsum placerat eu. Nullam ac lectus ut
            ligula suscipit blandit sed id lorem. Phasellus ultricies urna vel velit congue
            vehicula.
          </Typography>
          <Typography variant="body1" paragraph>
            Vestibulum sit amet turpis quis mi fermentum pharetra vel nec arcu. Duis non libero
            hendrerit, suscipit eros id, fermentum urna. In hac habitasse platea dictumst.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
