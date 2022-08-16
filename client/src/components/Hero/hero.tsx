import * as React from 'react';
import { 
  Card,
  Container,
  Grid,
  Typography,
  Button
 } from '@mui/material'

import pfp from '../../assets/img/John.png';

export default function Hero() {

  return (
    <Container maxWidth="xl"
       sx={{
        display: 'flex',
        gap: '10px',
    }}>
      <Container 
        sx={{
          flexGrow: 1,
      }}>
        <Grid container spacing={2} >
          <Typography sx={{ width:"100%", mt: 8 }} variant="h1" component="h2" color="text.primary">
            Hi 🖖
          </Typography>
          <Typography sx={{ mt: 2, mb: 3 }} variant="h1" component="h2" color="text.primary">
            I'm John
          </Typography>
        </Grid>
        <Grid 
          sx={{
            display: 'flexbox',
            justifyContent:'flex-end',
        }}>
          <Typography sx={{ mt: 6, mb: 3 }} variant="h3" color="text.primary">
            Plan ◾ Design ◾ Develop ◾ Deploy
          </Typography>

        </Grid>
        <Button href="/" variant="contained" 
          sx={{
            
        }}>
          Got a project?
        </Button>
        
      </Container>  
      <Card 
      sx={{
        flex: 'none',
        width: 500,
        right: '100%',
        height: 565,
        backgroundColor: '#19857b',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        paddingBottom: -10,
      }} >
        <img src={`${pfp}`} loading="lazy" alt="John Andres" />
      </Card>
    </Container>

  );
}