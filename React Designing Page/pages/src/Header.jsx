import GlobalNav from './GlobalNav';
import './Header.css';

function Header({onNav}){
    return(
        <header className="header">
            <img 
                src="http://placekitten.com/100/100?image=1"
                className="header-logo"
                alt="Cat on Stairs"
            />
            <h1 className="header-title">
                Cats on the Internet 
            </h1>
            <GlobalNav className="header-nav" onNav={onNav}/>
        </header>
    );
}

export default Header;