import menuItems from './menuItems';
import { useState } from 'react';
import './Socials.css';

function Socials({className}){

const menulist = menuItems.map( iteminItem =>{
return(
    <li className="global-nav__item" key={iteminItem.name}>
       <a className="global-nav__link" href={iteminItem.path}>
       {iteminItem.name}
       </a>

    </li>
);
});

const [showMenuItems,setShowMenuItems] = useState(false);
return(
<nav className={`global-nav ${className}`}>
    <button className="golbal-nav__button" onClick={() =>setShowMenuItems(!showMenuItems)} >Social Accounts</button>
    {showMenuItems &&(
    <ul className="global-nav__lists">
        {menulist}
    </ul>
    )}
</nav>
);

}

export default Socials;