import * as React from 'react';
import {
    Grid,
    Stack,
    Slide,
    LinearProgress,
    Box, 
    List,
    ListItem,
    Theme
  } from '@mui/material'

  import TextScroller from "./TextScroller";

const Banner = () => {



    return(
        <>
            <Stack sx={{ width:'100%', color: 'grey.500', backgroundColor:'red' }} spacing={2}>
                <LinearProgress color="secondary" />
                <TextScroller text="React" />
   
                <LinearProgress color="secondary" />
            </Stack>
        </>
    )
}

export default Banner;