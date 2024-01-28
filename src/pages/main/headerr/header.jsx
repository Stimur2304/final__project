import image  from '../../main/pictures/image.png'
import './header.css'
import * as React from 'react';
import Button from '@mui/material/Button';

const  HeaderPart = () => {
  return (
    <div className='Header'>
        <div className='header'>
            <div className='logo'>
                <img className='logo-header' src={image} alt="" />
            </div>

            <div className='right__part'>
              <a className='header-links' href="/">Home</a>
              <a className='header-links'  href="/aboutUs">About us </a>
              <Button className='header-button' href='/' variant="contained"><p className='button-text'>+ Add advertisement</p></Button>
            </div>
        </div>
    </div>
  )
}

export default HeaderPart
