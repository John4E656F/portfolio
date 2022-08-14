import React, { useState } from 'react';
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



export default function ButtonAppBar() {
const theme = useTheme();

  return (

      <AppBar position="static" >
        <Toolbar >
          <Container maxWidth="xl" 
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly'
            }}>
            <img src="{logo}" alt="Logo" />
            <Container maxWidth="sm" >
              <List>
                <ListItem alignItems="flex-start"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',

                  }}>
                  <a href='/home'>Home</a>
                  <a href='/works'>Works</a>
                  <a href='/cv'>CV</a>
                  <a href='/contact'>Contact</a>
                </ListItem>
              </List>
            </Container>
            <Button color="inherit">Login</Button>
          </Container>
        </Toolbar>
      </AppBar>

  );
}
