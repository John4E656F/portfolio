import React, { useState } from 'react';
import {
    Grid,
    Stack,
    Slide,
    LinearProgress,
    Box, 
    List,
    ListItem,
    Theme
  } from '@mui/material';

  import TextScroller from "./TextScroller";

const Banner = () => {

    return(
        <>
            <Stack sx={{ width:'100%', color: 'white.500', backgroundColor:'red' }} spacing={2}>
                <LinearProgress color="secondary" />
                    <TextScroller />
                <LinearProgress color="secondary" />
            </Stack>
        </>
    )
}

export default Banner;