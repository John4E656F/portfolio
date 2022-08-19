import React, { useState } from 'react';

import { 
    Avatar,
    Container,
    Grid,
    Typography,
    Button
   } from '@mui/material';

import Linkedin from '../../assets/iconsPng/linkedin.png';
import Github from '../../assets/iconsPng/github.png';

export default function Footer() {
 

    return (
        <>
            <Container maxWidth="xl" sx={{mt: '10px' }}>
                <Grid container sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                }}>
                    <Grid item >
                        <img alt='John Andres LinkedIn Profile' src={Linkedin} />
                    </Grid>
                    <Grid item>
                        Made with ❤️ by John Andres 
                    </Grid>
                    <Grid item >
                        <img alt='John Andres Github Profile' src={Github} style={{width: '35px'}}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}