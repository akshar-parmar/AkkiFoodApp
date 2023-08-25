//Header Component
import React, { useState } from 'react';
import {Title} from './title';

function checkLoggedIn(){
//let say it return true always
return true;
}
 export const Header = ()=>{
    const[isLoggedIn, setIsLoggedIn] = useState(checkLoggedIn());

    return (
        <header className="header-section">
            <Title/>
            <div className='wrapperForListAndLoginbtn'>
            <ul className = "nav-list">
                <li className = "item">About</li>
                <li className = "item">Service</li>
                <li className = "item">Cart</li>
            </ul>
            { isLoggedIn===false?
            (<button className='login-logout-btn' onClick={()=>{
                setIsLoggedIn(true);
            }}>Login</button>)
            :
            (<button className='login-logout-btn' onClick={()=>{
                setIsLoggedIn(false);
            }}>Logout</button>)
            }
            </div>

        </header>
    );
};