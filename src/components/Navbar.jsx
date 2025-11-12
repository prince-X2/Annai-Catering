import React from 'react'
import { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import WorkIcon from '@mui/icons-material/Work';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';


const Navbar = () => {
  const[openMenu, setOpenMenu] = useState(false);
  const menuOptions =[
    { text : 'Home', icon : <HomeIcon />, link: '#home' },
    { text : 'About Us', icon : <InfoIcon />, link: '#about' },
    { text : 'Work', icon : <WorkIcon />, link: '#work' },
    { text : 'Contact Us', icon : <PhoneRoundedIcon />, link: '#contact' },
    { text : 'Cart', icon : <ShoppingCartRoundedIcon />, link: '#cart' },

  ]
  return (
    <nav>
      <div className='nav-logo-container'>
          <h1>Annai Catering</h1>
      </div>
      <div className='navbar-links-container'>
        <a href='#home'>Home</a>
        <a href='#about'>About Us</a>
        <a href='#work'>Work</a>
        <a href='#contact'>Contact</a>
        <a href='#cart'>
          <BsCart2 className='navbar-cart-icon' />
        </a>
        <button
          className='primary-button'
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            else window.location.hash = '#contact';
          }}
        >
          Book Now
        </button>
      </div>
      
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
          <Box sx={{width: 250}} role='presentation' onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
            <List>
              {menuOptions.map((option) => (
                <ListItem key={option.text} disablePadding>
                  <ListItemButton component="a" href={option.link}>
                    <ListItemIcon>{option.icon}</ListItemIcon>
                    <ListItemText primary={option.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>

    </nav>
  )
}

export default Navbar
