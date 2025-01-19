import BookCard from "./components/BookCard";
import Fiction from "./components/Fiction";
import './App.css';
import NonFiction from "./components/NonFiction";
import { useState } from "react";

function App() {

const [value,setvalue]= useState(true);
 
  return (
    <div>
      
    
      <h1>Mini Book Store</h1>
     
      <button onClick={()=>setvalue( !value)}
      data-testid="toggle-btn">{value?'show fiction':' show non fiction'} 

      </button>
      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
           
        {value? <Fiction/>: <NonFiction/>}     
           
      </div>
    </div>
  
  );
}

export default App;

