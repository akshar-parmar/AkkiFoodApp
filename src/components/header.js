//Header Component
import {Title} from './title';
 export const Header = ()=>{
    return (
        <header className="header-section">
            <Title/>
            <ul className = "nav-list">
                <li className = "item">About</li>
                <li className = "item">Service</li>
                <li className = "item">Cart</li>
            </ul>

        </header>
    );
};