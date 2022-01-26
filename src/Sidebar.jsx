import React from 'react';
import './css/Sidebar.css'
import SidebarOption from './SidebarOption';
import { Avatar } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TagIcon from '@mui/icons-material/Tag';
import Tag from '@mui/icons-material/Tag';

function Sidebar() {
    return ( 
        <div className="sidebar">  
          <div className="sidebar__top">
            <div className="sidebar__info">
                <img src = "https://media-exp1.licdn.com/dms/image/C4E16AQG--CrbWY3tvA/profile-displaybackgroundimage-shrink_200_800/0/1593801035479?e=1648080000&v=beta&t=CFoiK1dlQh5sUVVDl73oR5Z_kEyCqAXp2xyPqTI3FoA"/>
                <Avatar className='sidebar__avatar' src='https://avatars.githubusercontent.com/u/45850768?v=4'></Avatar>
                <h2>Saurabh Kumar Rai</h2>
                <h4>grimbehindspects@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                  <p>Connections</p>
                  <p className='statnumber'>2054</p>
                  <br></br>
                </div>
                <h3>Grow Your Network</h3>
                <div className="sidebar__stat">
                  <p>Who viewed your profile</p>
                  <p className='statnumber'>2054</p>
                </div>
                <div className="sidebar__stat">
                </div>              
            </div>
            <SidebarOption element = "My Items" Icon = {BookmarkIcon}></SidebarOption>
            
          </div>

          <div className="sidebar__bottom">
            <h3>Recent Items</h3>
            <SidebarOption element = "Programming" Icon = {TagIcon}></SidebarOption>
            <SidebarOption element = "Backend" Icon = {TagIcon}></SidebarOption>
            <SidebarOption element = "Frontend" Icon = {TagIcon}></SidebarOption>
            <SidebarOption element = "Fullstack" Icon = {TagIcon}></SidebarOption>
            <SidebarOption element = "DSA" Icon = {TagIcon}></SidebarOption>
            
          </div>
          
        </div>
     );
}

export default Sidebar;