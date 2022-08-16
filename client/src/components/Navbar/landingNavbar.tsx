import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Container, 
  List,
  ListItem,
  useTheme
} from '@mui/material'

import logo  from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';




export default function NavBar() {
const theme = useTheme();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])


  return (

      <AppBar position="static" color='transparent'>
        <Toolbar >
          <Container maxWidth="xl" 
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly'
            }}>
            <img src={logo} alt="Logo" width={60} height={60}/>
            <Container maxWidth="sm" >
              <List>
                <ListItem alignItems="flex-start"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',

                  }}>
                  <a className='navlink' href='/home' >Home</a>
                  <a className='navlink' href='/works' >Projects</a>
                  <a className='navlink' href='/cv'>CV</a>
                  <a className='navlink' href='/contact' >Contact</a>
                </ListItem>
              </List>
            </Container>
            <Button color="inherit">Let's Chat</Button>
          </Container>
        </Toolbar>
      </AppBar>

  );
}
