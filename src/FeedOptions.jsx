import React from 'react';
import './css/FeedOption.css';

function FeedOption({Icon , title , color}) {
    return (  
        <div className="inputOption">
            <Icon style ={{color :color}} />
            <h4>{title}</h4>
        </div>
        
    );
}

export default FeedOption;