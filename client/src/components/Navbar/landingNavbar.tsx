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

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CV from '../../assets/cvJohn.pdf'
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
              justifyContent: 'space-evenly',
              alignItems: 'center',
              gap: "10px"
            }}>
            <GitHubIcon fontSize= "large"/>
            <LinkedInIcon fontSize= "large"/>
            <Container maxWidth="sm" >
              <List>
                <ListItem alignItems="flex-start"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',

                  }}>
                  <a className='navlink' href='/home' >Home</a>
                  <a className='navlink' href='/works' >Projects</a>
                  <a className='navlink' href='/contact' >Contact</a>
                </ListItem>
              </List>
            </Container>
            <a href={CV} target="_blank" rel="noopener noreferrer" download><Button variant="contained">Download my CV</Button></a>
          </Container>
        </Toolbar>
      </AppBar>

  );
}
