import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]= useState(5);
  
  const addValue=()=>{
    counter=counter+1;
    setCounter(counter);
    console.log("value Added",counter);
// ab kya ho rha hai-> ab counter ke value to increase ho rhe hai pr UO pe change nhi ho rhe(PROBLEM!!)
  }
  const removeValue=()=>{
    if (counter>0){
      setCounter(counter-1); 
    }else{
      return counter;
    }
    console.log("value Added",counter);
  }


  return (
    <>
      <h1>Sallu DON</h1>
      <h3>Counter:{counter}</h3>

      <button onClick={addValue}>Increase Value</button>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
