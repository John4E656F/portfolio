import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from "react-router-dom";
import { ClickAwayListener } from '@mui/material';

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <img src="{logo}" alt="Logo" />
            <Container maxWidth="sm">
              <List>
                <ListItem alignItems="flex-start">
                  <Link to="/home">
                    <ListItemText primary="Home" />
                  </Link>
                  <ClickAwayListener onClickAway={handleClickAway}>
                      <p onClick={handleClick}>Works</p>
                      <Menu
                        id="basic-menu"
                        open={open}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                      <MenuItem >Profile</MenuItem>
                      <MenuItem >My account</MenuItem>
                      <MenuItem >Logout</MenuItem>
                      </Menu>

                  </ClickAwayListener>

                  <Link to="/home">
                    <ListItemText primary="Home" />
                  </Link>
                </ListItem>
              </List>
            </Container>
            <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
