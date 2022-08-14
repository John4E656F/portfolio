import * as React from 'react';
import { 
  Container,
  Box
 } from '@mui/material'

import pfp from '../../assets/John.png';

export default function BoxSx() {

  return (
    <Container maxWidth="xl"
       sx={{
        display: 'flex',
        gap: '10px',
    }}>
      <Container 
        sx={{
          backgroundColor: 'gold',
          flexGrow: 1,
      }}>
        
      </Container>  
      <Container fixed
      sx={{
        flex: 'none',
        width: 500,
        right: '100%',
        backgroundColor: 'paleturquoise',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }} >
        <img src={pfp} />
      </Container>
    </Container>

  );
}