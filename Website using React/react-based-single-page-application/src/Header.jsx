import GlobalNav from './GlobalNav';
import './Header.css';
import ThemeSwitcher from './ThemeSwitcher';

function Header({onNav, theme , toggleTheme}){
    return(
        <header className="header">
            <img 
                src="https://images.unsplash.com/photo-1484244233201-29892afe6a2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                className="header-logo"
                alt="Cat with sticker"
            />
            <h1 className="header-title">
                Rescued Animal Adoption Center 
            </h1>
            <ThemeSwitcher className="header-theme-switcher" theme={theme} toggleTheme={toggleTheme}/>
            <GlobalNav className="header-nav" onNav={onNav}/>
            
        </header>
    );
}

export default Header;