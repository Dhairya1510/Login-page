import React from 'react'
import Login from './Login_api'
import Login2 from './Login_email'
import './App.css'
import {Button, Form, FormGroup, Label, Input }from 'reactstrap'
//import {FacebookLogingButton} from 'react-loging-buttons';
function App() {
  return (
    <Form className='App'>
     <h1>
     <span className="font-weight-bold">Log in</span>
     </h1>
     <Login /> 
     <Login2 />
    </Form>
  )
}

export default App
