import React, { useEffect, useState } from 'react';
import { useSpring, animated } from "react-spring";

import {
    Grid,

} from '@mui/material';

import ReactIcon from '../../assets/iconsPng/react.png';
import Nodejs from '../../assets/iconsPng/nodejs.png';
import Typescript from '../../assets/iconsPng/typescript.png';
import Js from '../../assets/iconsPng/js.png';
import Css from '../../assets/iconsPng/css.png';
import Html from '../../assets/iconsPng/html.png';
import Git from '../../assets/iconsPng/git.png';
import Github from '../../assets/iconsPng/github.png';
import Bootstrap from '../../assets/iconsPng/bootstrap.png';
import Tailwind from '../../assets/iconsPng/tailwind.png';
import Npm from '../../assets/iconsPng/npm.png';
import Mongodb from '../../assets/iconsPng/mongodb.png';


const style = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  }
  
  const textStyle = {
    color: 'white',
    fontSize: '50px',
  }

const TextScroller = () => {
    const [error] = useState(null);
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { translateX: "-100%" },
        to: { translateX: "40%" },
        config: { duration: 10000 },
        loop: true,
        reset: true,
        onRest: () => {
            setKey(key + 1);
        }
    });

    const item: {icon: string, text: string}[] = [
        {
            icon: ReactIcon,
            text: 'React',
        },
        {
            icon: Nodejs,
            text: 'NodeJS',
        },
        {
            icon: Typescript,
            text: 'Typescript',
        },
        {
            icon: Js,
            text: 'JS',
        },
        {
            icon: Css,
            text: 'Css',
        },
        {
            icon: Html,
            text: 'Html',
        },        
        {
            icon: Git,
            text: 'Git',
        },
        {
            icon: Github,
            text: 'Github',
        },
        {
            icon: Bootstrap,
            text: 'Bootstrap',
        },
        {
            icon: Tailwind,
            text: 'Tailwind',
        },
        {
            icon: Mongodb,
            text: 'MongoDB',
        } 
    ] 

    const AnimateGrid = animated(Grid)


    return(
            <div>
                <AnimateGrid style={{...textStyle, ...scrolling}} 
                sx={{
                    width: '100%',
                    display: 'flex',
                    
                }}>
                { 
                    item.map ((item, key, obj) => {

                    return( 
                        
                        <div key={key} style={{...style}}>
                            <Grid item >{item.text}</Grid>
                            <Grid item sx={{overflow: 'hidden', maxHeight: '70px',}}>  
                                <img src={item.icon} alt={item.text} style={{}}/>
                            </Grid>
                        </div>
                    )})
                }
                    

                </AnimateGrid>
            </div>
    );
};

export default TextScroller;