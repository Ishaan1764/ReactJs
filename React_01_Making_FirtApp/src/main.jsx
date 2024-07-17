import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>YO YO</h1>
  );
}

//vase yaha ek he element allowd hai pr humne use ek div mein kr deya jisse use ek he hoe pr usme bhut sare aa pae.
//instead of<App /> we can also write it like App() because at the end yeh ek function he hai.

//ab hum apna object kase render krvae?
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Ajaoo google pe.'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // <React.StrictMode>
     
  //   {/* <div>
  //   <App />
  //   <MyApp />
   
  //   </div> */}
    
  // </React.StrictMode>
)
