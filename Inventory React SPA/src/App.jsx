import { useState } from 'react';
import Reorder from './Reorder';
import './index.css';

 function App(){
   const [count, setCount] = useState(10);
   function onReorder() { 
    setCount(5)
    }
     
      
  return(
    <div className = "counter">
      
        <h1 className="counter__title">Inventory Count </h1>
        <p className="counter__display">{count}</p>
        <button className="counter__button--increment" onClick={(e) => setCount(count+1)}> +

        </button>
        <button className="counter__button--decrement" onClick={(e) => setCount(count-1)} disabled={!count}> -

        </button>
        
      
        {(count === 0 ) && <Reorder onReorder={onReorder} />}
    
        
    </div>
  );
  }
  export default App;