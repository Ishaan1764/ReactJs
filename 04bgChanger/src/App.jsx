import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColor]=useState("olive");
  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
        <div className="flex flex-wrap justigy-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          {/* onClick ko function chaheye jo function se return aa rha vo nhi esleye we cannot use onClick="setColor("red") 
            IS lEYE humne ek Call back de deya jiske anda ek function ke andar function return keya.
          */}
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>
            Red  
          </button>  
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>
            Green  
          </button>  
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>
            Blue  
          </button>  
        </div>
      </div>
    </div>
    )
}

export default App
