import React from 'react';
import './Header.css'
import logo from './img/logo.png'
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        <div className='header'>
            <div className='header_icons'>
              <div className="header_icon header_icon_active">
              <HomeIcon/>
              <p>Home</p>
              </div>
              <div className="header_icon">
              <FlashOnIcon/>
              <p>Trending</p>
              </div>
              <div className="header_icon">
              <LiveTvIcon/>
              <p>Verified</p>
              </div>
              <div className="header_icon">
              <VideoLibraryIcon/>
              <p>Collections</p>
              </div>
              <div className="header_icon">
              <SearchIcon/>
              <p>Search</p>
              </div>
              <div className="header_icon">
              <PersonOutlineIcon/>
              <p>Account</p>
              </div>
              
            </div>
            <img
              src={logo}
              alt='logo'
            />
             
        </div>
    )
}

export default Header
 