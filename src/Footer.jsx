import React from 'react';
import './css/footer.css';
import InfoIcon from '@mui/icons-material/Info';
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Footer() {
    return (  
        <div className="footer">
            <div className="footer__top">
                <div className="footer__title">
                  <h2>LinkedIn News</h2>
                  <InfoIcon></InfoIcon>
                </div>
                <div className="footer__news">
                    <SidebarOption element = "Top Programming languages" Icon = {FiberManualRecordIcon}></SidebarOption>
                    <p>Check it out ...</p>
                    <SidebarOption element = "Backend technology" Icon = {FiberManualRecordIcon}></SidebarOption>
                    <p>Check it out ...</p>
                    <SidebarOption element = "Frontend TEchnology" Icon = {FiberManualRecordIcon}></SidebarOption>
                    <p>Check it out ...</p>
                    <SidebarOption element = "Freelancing Jobs" Icon = {FiberManualRecordIcon}></SidebarOption>
                    <p>Check it out ...</p>
                    <SidebarOption element = "LinkedIn reports clones" Icon = {FiberManualRecordIcon}></SidebarOption>
                    <p>Check it out ...</p>
                    <SidebarOption element = "This is the same clone" Icon = {FiberManualRecordIcon}></SidebarOption>
                    <p>Check it out ...</p>
            
                </div>
              
            </div>
            <div className="footer__bottom">
              <ul>
               <li>About</li>
               <li>Accessibility </li>
               <li>Help Center </li>
              </ul>
              <ul>
               <li>Privacy & Terms </li>
               <li>Ad Choices </li>
              </ul>
              <ul> 
               <li>Advertising </li>
              </ul> 
              <br></br>
             <p>LinkedIn Clone © 2022</p>
 
            </div>
            

        </div>
    );
}

export default Footer;