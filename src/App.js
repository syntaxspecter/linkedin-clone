import React from 'react';
import './css/app.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Footer from './Footer';

function App() {
  return (
   <div className='main_body'>
     <div className='header_section'>
        <Header></Header>
     </div>  
     
     <div className='app_body'>
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Footer></Footer>
     </div>
     
   </div>
   
  );
}

export default App;
