import React from 'react';
import './css/SidebarOption.css'

function SidebarOption({Icon , element}) {
    return (  
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"/>}
            <h3 className='sidebarOption__element'>{element}</h3>
        </div>
    );
}

export default SidebarOption;