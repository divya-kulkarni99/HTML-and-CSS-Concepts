
import Home from'./Home';
import About from'./About';
import Events from'./Events';
function Main({page, onNav}){
    

    return(
        <main>
            {page === 'Home' && <Home/>}
            {page === 'About' && <About/>}
            {page === 'Events' && <Events/>}
           
        </main>
    );
}

export default Main;