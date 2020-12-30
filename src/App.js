import React from 'react'
import Login from './Login_api'
import Login2 from './Login_email'
import './App.css'
//import {FacebookLogingButton} from 'react-loging-buttons';
function App() {
  return (
    <div className='App'>
     <h1>
     <span className="font-weight-bold">Log in</span>
     </h1>
     <Login /> 
     <Login2 />
    </div>
  )
}

export default App
