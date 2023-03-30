import Home from './Home';
import Adopt from './Adopt';
import Register from './Register';
function Main({page,onNav}){
    

    return(
        <main>
            {page === 'Home' && <Home/>}
            {page === 'Adopt' && <Adopt/>}
            {page === 'Register to meet your pet' && <Register/>}
           
        </main>
    );
}

export default Main;