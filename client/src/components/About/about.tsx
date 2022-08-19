import React, { useState } from 'react';
import { 
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Container,
    Grid,
    Typography,
    Button
   } from '@mui/material'



export default function About() {



    return (
        <>
            <Container maxWidth="xl"
                sx={{    
                gap: '10px',
            }}> 
                <Typography sx={{ width:"100%", mt: 5,  }} variant="h3" component="h3" color="text.primary">
                About me
                </Typography>
            <Grid container sx={{
                backgroundColor: 'red',
                mt: '20px',
            }}>
                
                <Grid item sx={{backgroundColor :'blue', }}>
                    <Typography variant="h4">
                    I'm a junior Web Developer looking for an internship or an employment, I'm very passionate about IT & I love discovering new Tech. I can quickly learn a new skill, and adapt in different situation needed.
                    </Typography>
                </Grid>
            </Grid>
            
            </Container>
        </>
    );
}