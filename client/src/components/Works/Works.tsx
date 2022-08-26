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
    Button, 
    Link
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
        },
        {
            alt: '',
            link: '',
            img: Item1,
        },
    ]

    const AnimateGrid = animated(Grid)

    return (
        <>
            <Container maxWidth="xl"> 
                <Grid container >
                    <Grid item >
                        <Typography sx={{ width:"100%", mt: 5, marginRight: '10px', }} variant="h3" component="h3" color="text.primary">
                            My Works
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Link href="#">
                            <Typography sx={{ width:"100%", mt: 5, paddingTop:'20px', }} variant="h5" component="h5" color="text.primary">
                                View More
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            {/* <AnimateGrid style={{...scrolling}} 
                sx={{
                width: '100%',
                display: 'flex',
                gap: '50px',
                    
            }}> */}
                <Grid sx={{
                    width: '100%',
                    display: 'flex',
                    gap:'50px'
                }}>
                { 
                    cardItem.map ((cardItem, key, obj) => {

                    return( 
                        
                        <Card key={key} sx={{ maxWidth: 'auto' }}>
                            <CardMedia
                                component="img"
                                height= "350"
                                image={cardItem.img}
                            />
                            
                        </Card>
                    )})
                }
                </Grid>
            {/* </AnimateGrid> */}
            </Container>
        </>
    )
}