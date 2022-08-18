import React, { useEffect, useState } from 'react';
import { useSpring, animated } from "react-spring";

import {
    Grid,

} from '@mui/material';

import ReactIcon from '../../assets/iconsPng/react.png';



const style = {
    background: 'url("https://picsum.photos/200/300") center center / cover no-repeat',
    padding: '10px',
    width: '300px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
  const textStyle = {
    color: 'white',
    fontSize: '50px',
  }

const TextScroller = () => {
    const [error] = useState(null);
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { translateX: "-150%" },
        to: { translateX: "100%" },
        config: { duration: 5000 },
        loop: true,
        reset: true,
        onRest: () => {
            setKey(key + 1);
        }
    });

    const item: {icon: string, text: string}[] = [
        {
            icon: '',
            text: 'WEEEEEEE',
        },
        {
            icon: ReactIcon,
            text: 'React',
        },
        {
            icon: '',
            text: 'NodeJS',
        },
        {
            icon: '',
            text: 'Html',
        },
        {
            icon: '',
            text: 'CSS',
        },        {
            icon: '',
            text: 'JS',
        },
        {
            icon: '',
            text: 'MongoDB',
        } 
    ] 

    const AnimateGrid = animated(Grid)


    return(
            <div>
                <AnimateGrid style={{...textStyle, ...scrolling}} 
                sx={{
                    display: 'flex',
                    gap: 5,
                }}>
                { 
                    item.map ((item, key, obj) => {

                    return( 
                        
                        <div key={key}>
                            <Grid item width={400}>
                                {item.icon}
                                {item.text}
                            </Grid>
                        </div>
                    )})
                }
                    

                </AnimateGrid>
            </div>
    );
};

export default TextScroller;