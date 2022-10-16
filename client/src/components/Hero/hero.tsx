import * as React from 'react';

import { 
  Card,
  Container,
  Grid,
  Typography,
  Button
 } from '@mui/material'

import pfp from '../../assets/img/John.png';
import Typewriter from 'typewriter-effect';

export default function Hero() {

  return (
    <Container
       sx={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }}>
      <Container 
        sx={{
          display:'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          testAlign: 'center',
      }}>
          <Typography sx={{ width:"100%", mt: 5, textAlign: 'center'}} variant="h3" component="h3" color="text.primary">
            Hi 🖖
          </Typography>
          <Typography sx={{ textAlign: 'center'}} variant="h3" component="h3" color="text.primary">
            I'm John
          </Typography>
          <Typography sx={{ mt: 1, mb: 3, textAlign:'center' }} variant="h3" color="text.primary">
            <Typewriter
              options={{
                strings: ['Web Developer', 'Frontend Developer',],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        <Button variant="contained" sx={{width: 200, margin:'auto'}}>
          Got a project?
        </Button>
        
      </Container>  
      <Card 
      sx={{
        flex: 'none',
        width: 500,
        right: '100%',
        height: 565,
        background: 'transparent',
        // backgroundColor: '#19857b',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
        paddingBottom: -10,
      }} >
        <img src={`${pfp}`} loading="lazy" alt="John Andres" />
      </Card>
    </Container>

  );
}