import menu from './menu';
import './GlobalNav.css'
import Socials from'./Socials';
import { useState } from 'react';
import './gg-menu.css';


function GlobalNav({className,onNav}){
    const list = menu.map( item =>{
        return(
            <li className="global-nav__item" key={item.name}>
                <a onClick ={onNav} className="global-nav__link" href={item.path} data-target={item.name}>
                    {item.name}
                
                </a>

            </li>
        );
    });
    const [showMenu,setShowMenu] = useState(false);
    return(
        <nav className={`global-nav ${className}`} >
           
            <button className="golbal-nav__button" onClick={() =>setShowMenu(!showMenu)}>
            <span className="gg-menu"></span>
            </button>
            {showMenu &&(
           <ul className="global-nav__list">
            {list}
            <Socials className="global-nav__socials"/>
           </ul>
            )}
        </nav>
    );
    
   

}

export default GlobalNav;