import React, { Component } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './css/header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <div className="header__logo">
                    <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'/>
                </div>
                <div className="header__search">
                    <SearchIcon></SearchIcon>
                    <input type='text' placeholder='Search'></input>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title = "Home" Icon = {HomeIcon}></HeaderOption>
                <HeaderOption title = "Network" Icon={PeopleIcon}></HeaderOption>
                <HeaderOption title = "Jobs" Icon={BusinessCenterIcon}></HeaderOption>
                <HeaderOption title = "Messaging" Icon = {MessageIcon}></HeaderOption>
                <HeaderOption title = "Notifications" Icon = {NotificationsIcon}></HeaderOption>
                <HeaderOption title = "Me" avatar =  "https://avatars.githubusercontent.com/u/45850768?v=4"></HeaderOption>

                
         
            </div>
        </div>
      );
}

export default Header;