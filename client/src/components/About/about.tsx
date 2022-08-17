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
            }}>
                
                <Grid item sx={{backgroundColor :'blue',}}>
                    <Card sx={{ maxWidth: '345',}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography sx={{ width:"100%", mt: 8 }} variant="h3" component="h3" color="text.primary">
                                Hi 🖖
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            
            </Container>
        </>
    );
}