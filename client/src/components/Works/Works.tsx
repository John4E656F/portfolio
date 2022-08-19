import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";

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

import Item1 from '../../assets/portfolio/portf1.png';
import Item2 from '../../assets/portfolio/portf2.png';

export default function Works () {
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { translateX: "-0" },
        to: { translateX: "100%" },
        config: { duration: 10000 },
        loop: true,
        reset: true,
        onRest: () => {
            setKey(key + 1);
        }
    });

    const cardItem: {alt:string, link: string, img: string}[] = [
        {
            alt: '',
            link: '',
            img: Item1,
        },
        {
            alt: '',
            link: '',
            img: Item2,
        }
    ]

    const AnimateGrid = animated(Grid)

    return (
        <>
            <Container maxWidth="xl"> 
                <Grid container >
                    <Grid item>
                        <Typography sx={{ width:"100%", mt: 5,  }} variant="h3" component="h3" color="text.primary">
                            My Works
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ width:"100%", mt: 5,  }} variant="button" component="a" color="text.primary">
                            View More
                        </Typography>
                    </Grid>
                </Grid>
            <AnimateGrid style={{...scrolling}} 
                sx={{
                width: '100%',
                display: 'flex',
                gap: '50px',
                    
            }}>
                
                { 
                    cardItem.map ((cardItem, key, obj) => {

                    return( 
                        
                        <Card key={key} sx={{ maxWidth: 'auto' }}>
                            <CardMedia
                                component="img"
                                height= "300"
                                image={cardItem.img}
                            />
                            
                        </Card>
                    )})
                }
            </AnimateGrid>
            </Container>
        </>
    )
}