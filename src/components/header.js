//Header Component
import React, { useState } from 'react';
import {Title} from './Title';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Instamart from './Instamart';

function checkLoggedIn(){
//let say it return true always
return true;
}
 export const Header = ()=>{
    const[isLoggedIn, setIsLoggedIn] = useState(checkLoggedIn());
    const isOnline = useOnlineStatus();
   // console.log("render");
    return (
        
        <header className="header-section">
            <Title/>
            <div className='wrapperForListAndLoginbtn'>
            <ul className = "nav-list">
                <li className = "item"><Link to="/about" className='list-item-link'>About</Link></li>
                <li className = "item"><Link to="/service" className='list-item-link'>Service</Link></li>
                <li className = "item"><Link to="/" className='list-item-link'>Cart</Link></li>
                <li className = "item"><Link to="/instamart" className='list-item-link'>Instamart</Link></li>
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
            <p>{isOnline==true ? '✅': '🔴'}</p>
            </div>

        </header>
    );
};