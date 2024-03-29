//Header Component
import React, { useState,useContext } from 'react';
import {Title} from './Title';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
// import Instamart from './Instamart';
// import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function checkLoggedIn(){
//let say it return true always
return true;
}
 export const Header = ()=>{

    const[isLoggedIn, setIsLoggedIn] = useState(checkLoggedIn());
    const isOnline = useOnlineStatus();
    const cartItems = useSelector(store=>store.cart.items);
    // console.log(cartItems);
   
    return (
        
        <header className="header-section">
            <Title/>
            <div className='wrapperForListAndLoginbtn'>
            <ul className = "nav-list">
                <li className = "item"><Link to="/about" className='list-item-link'>About</Link></li>
                <li className = "item"><Link to="/service" className='list-item-link'>Service</Link></li>
                <li className = "item"><Link to="/cart" className='list-item-link'><FontAwesomeIcon icon={faCartShopping} />{cartItems.length}</Link></li>
                <li className = "item"><Link to="/instamart" className='list-item-link'>Instamart</Link></li>
            </ul>
            { isLoggedIn===false?
            (<Link to ="/login"><button className='login-logout-btn' onClick={()=>{
                setIsLoggedIn(true);
            }}>Login</button></Link>)
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